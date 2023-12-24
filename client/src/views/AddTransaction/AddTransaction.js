import React, { useEffect, useState } from 'react';
import './AddTransaction.css'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

function AddTransaction() {
    
    
    const [amount,setAmmount]=useState('')
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [type,setType]=useState([])
    const [category,setCategory]=useState()
const addtransaction = async ()=>{
    const transaction = {
      type,
      description,
      date,
      amount,
      category
    };

    const response = await axios.post('/api/transaction',transaction)
    alert(response?.data?.message)
    console.log(response)

    setAmmount("")
    setDescription("")
    setDate("")
    setType("")
    setCategory("")
}

  return (
    <div>
      <Navbar />
      <form className='form'>
        <div  className='form-container'>
        <label htmlFor="transactionType" >Transaction Type:</label>
        <select id="transactionType" name="transactionType" required
         onChange={(e)=>{
          setType(e.target.value)
         }} >
          <option>choose Account</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>

        <label htmlFor="transactionType" >Category:</label>
        <select id="transactionCategory" name="transactionCategory" required
         onChange={(e)=>{
          setCategory(e.target.value)
         }} >
          <option>choose Category</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="rent">Rent</option>
          <option value="shooping">Shooping</option>
          <option value="travelt">Travel</option>
          <option value="education">Education</option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="side-hussel">Side-Hussel</option>
          <option value="other">Othert</option>
        </select>

        <label htmlFor="amount" >Amount:</label>
        <input type="number" id="amount" 
        className='input-field'
        name="amount" 
        value={amount}
        required 
        onChange={(e)=>{
            setAmmount(e.target.value)
        }}
        />

        <label htmlFor="description">Description:</label>
        <textarea id="description" 
       
        name="description"
        value={description}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        className='input-field'
       ></textarea><br/> 
      
        <label htmlFor="date" >Date:</label>
        <input type="date" id="date" name="date" 
        className='input-field'
        required 
        value={date}
        onChange={(e)=>
            setDate(e.target.value)
        }/>
<br/>
        <button type="button" onClick={addtransaction} >
          Submit
        </button>
        </div>
      </form>
    <Footer/>
    </div>
  );
}

export default AddTransaction;
