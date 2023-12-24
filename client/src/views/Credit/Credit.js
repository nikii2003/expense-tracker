import React, { useEffect, useState } from 'react'
import "./Credit.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import Footer from '../../components/Footer/Footer';

function Credit() {

    const [transaction,setTransaction]=useState([]);
    const [type,setType]=useState('')

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

   async function myDebit() {

        const response = await axios.get('/api/transaction')
        const data = response?.data?.data || [];

        const debitTransaction = data.filter(transaction =>transaction.type === 'credit');
        setTransaction(debitTransaction)
        setType('credit')

    }
    

   useEffect(()=>{
    myDebit()
   },[])

   const deleteTransaction = async (_id) => {
    const response = await axios.delete(`/api/transaction/${_id}`);
    console.log(response?.data?.data);

    alert("are you sure you want to delete this ");
    myDebit()
  };
    

  return (
    <>
    <Navbar/>
    <div className='flex-div-credit-container'>
    <div>
    <SideNavbar/>
    </div>
    <div>
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
      <Footer/>
    </>
  )
}

export default Credit