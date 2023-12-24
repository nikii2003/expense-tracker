import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Transaction.css";
import Navbar from "../../components/Navbar/Navbar";
function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const [creditSum,setCreditSum]=useState()
  const[debitSum,setDebitSum]=useState()

  const CATEGORY_EMOJI_MAP={
    "food":"🥗",
    "shooping":'🛒',
    "entertainment":"📺",
    "salary":"💰",
    "travel":"✈",
    "education":"👩‍🎓",
    "rent":"🧾",
    "freelancing":"💻",
    "side-hussel":"📴",
    "other":"🤷‍♀️"
  }
  const loadAllTransactions = async () => {
    const response = await axios.get("/api/transaction");
    const transactiondata = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0 ;

    transactiondata.forEach((transaction)=>{
   if(transaction.type==='credit'){
    totalCredit +=transaction.ammount
   }else{
    totalDebit +=transaction.ammount
   }
    })

    setCreditSum(totalCredit)
    setDebitSum(totalDebit)

    setTransaction(transactiondata);
  };
  
  useEffect(() => {
    loadAllTransactions();
  }, []);

  return (
<>
<Navbar/>
    <div className="App">
        
      <h1> All Expenses 
      
      </h1>
     
     <span className="creadit-debit-expenses">Credit : {creditSum}<br/>
      debit : {debitSum}</span>
      {transaction?.map((transaction, index) => {
        const {
          _id,
          ammount,
          description,
          type,
          category,
          createdAT,
         
          updatedAT,
        } = transaction;

        const date = new Date(createdAT).toLocaleDateString();
        const time = new Date(createdAT).toLocaleTimeString();
        return (
          <div key={index} className="container">
            <span
              className={`transaction-ammount ${
                type === "debit" ? "transaction-debit" : "transaction-credit"
              }`}
            >
              {type === "debit" ? "-" : "+"} {ammount}
            </span>{" "}
            <span className="change-cradintial-debitition">
              {type === "debit" ? "debited" : "credited"} on {date} at {time}
            </span>
            <span className="transaction-category">
              {CATEGORY_EMOJI_MAP[category]}
              {category}</span>
              <hr/>
          <span className="description-text">{ description}</span>
          </div>

          
        );
      })}
    </div>
    
    </>
  );
}

export default Transaction;
