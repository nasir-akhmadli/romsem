import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import IntrosectionCarusel from '../components/IntrosectionCarusel'
import Section from '../components/Section';
import Sectioncarusel from '../components/Sectioncarusel'
import Footer from '../components/Footer';
// import Order from '../components/Order';
import Mobilhomepage from '../components/Mobilhomepage';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <IntrosectionCarusel/>
    <Section/>
    <Sectioncarusel/> 
    {/* <Order/> */}
    <Footer/>
    <Mobilhomepage/>
    </>
  )
}

export default Home