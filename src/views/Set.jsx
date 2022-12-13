import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Order from '../components/Order'
import Footer from '../components/Footer'
import setproduct from '../Json/Set.json'
import Setsection from '../components/Setsection'
import Setimg from '../components/Setimg'
import Mobilset from '../components/Mobilset'
// import { useState } from 'react'

const Set = () => {

  return (
    <>
    <Navbar/>
    <Header/>
    <Setimg/>
   <div className="set-container">
    {
         setproduct.map((product,index)=>(
            <Setsection key={index} product={product}/>
        ))
    }
   </div>
    <Order/>
    <Footer/>
    <Mobilset/>
    </>
  )
}

export default Set