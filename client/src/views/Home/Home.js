import React from 'react'
import Navbar from './../../components/Navbar/Navbar'
import './Home.css'
import ImgURL from './../Home/expense.jpeg'
import Footer from '../../components/Footer/Footer'
import { Card } from '../../components/Card/Card'
function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        
       <p className='slogans'>"Empower Your Finances, Track Your Expenses!"</p>
        <img src={ImgURL} className='image-div'/>
        <Card/>
        <Footer/>
      </div>
      </div>
  )
}

export default Home