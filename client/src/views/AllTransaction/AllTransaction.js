 import React, { useEffect, useState } from "react";
 import "./AllTransaction.css";
import { Link } from "react-router-dom";
import axios from "axios";
 import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import Footer from "../../components/Footer/Footer";
 function AllTransaction() {
  const { _id } = useParams();
  const [transaction, setTransaction] = useState([]);
  const [creditSum, setCreditSum] = useState();
  const [debitSum, setDebitSum] = useState();

  const CATEGORY_EMOJI_MAP = {
    food: "🥗",
    shooping: "🛒",
    entertainment: "📺",
    salary: "💰",
    travel: "✈",
    education: "👩‍🎓",
    rent: "🧾",
    freelancing: "💻",
    "side-hussel": "📴",
    other: "🤷‍♀️",
  };
  const loadTransaction = async () => {
    const response = await axios.get("/api/transaction");
    // setTransaction(response?.data?.data);
    const transactiondata = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transactiondata.forEach((transaction) => {
      if (transaction.type === "credit") {
        totalCredit += transaction.amount;
      } else {
        totalDebit += transaction.amount;
      }
    });

    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransaction(transactiondata);
  };

  useEffect(() => {
    loadTransaction();
  }, []);

  const deleteTransaction = async (_id) => {
    const response = await axios.delete(`/api/transaction/${_id}`);
    console.log(response?.data?.data);

    alert("are you sure you want to delete this ");
    loadTransaction();
  };
  return (
    <div>
      <Navbar />
      
      <Link
        to={`/addtransaction/ ${_id}`}
        className="add-product-heading"
      ></Link>
      <div className="transaction-container-main-div">
        <div className="all-credit-debit-expenses-div">
        <div>
        <SideNavbar/>
        </div>
        <div className="creadit-debit-expenses">
         Credit : {creditSum}
         <br />
         debit : {debitSum}
         {transaction.map((tranObj, index) => {
         const { _id, type, description, createdAT, amount, category } = tranObj;

       const date = new Date(createdAT).toLocaleDateString();
       const time = new Date(createdAT).toLocaleTimeString();

        return (
          <div key={index} className="container">
            <span
              className={`transaction-ammount ${
                type === "debit" ? "transaction-debit" : "transaction-credit"
              }`}
            >
               {type === "debit" ? "-" : "+"} {amount}
    
                   </span>{" "}
             <span className="change-cradintial-debitition">
              {type === "debit" ? "debited" : "credited"} on {time} at {date}
            </span>
            <span className="transaction-category">
              {CATEGORY_EMOJI_MAP[category]}
               {category}
             </span>
            <hr />
             <span className="description-text">{description}</span>
            <span
              className="delete-Transaction"
              onClick={() => {
                deleteTransaction(_id);
              }}
            >
              🗑
            </span>

          
          </div>
        );
      })}
      </div>
      </div>

      </div>
      <Footer/>
    </div>
   
  );
}

export default AllTransaction;