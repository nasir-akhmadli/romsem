import React from 'react'
import logo from '../assets/svgs/logo.svg'
import pizza from '../assets/svgs/pizza.svg'
import set from '../assets/svgs/set.svg'
import sok from '../assets/svgs/sok.svg'
import rolli from '../assets/svgs/rolli.svg'
import sushi from '../assets/svgs/sushi.svg'
import salat from '../assets/svgs/salat.svg'
import sup from '../assets/svgs/sup.svg'
import gargidali from '../assets/svgs/gargidali.svg'
import icki from '../assets/svgs/icki.svg'
import sehm from '../assets/svgs/sehm.svg'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  return (
    <>
    <section className="header-left nav">
    {/* <div className="overley-nav" ref={OverleyRef} >
                <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
                <a href="#">Пицца</a>
                <a href="#">Сеты</a>
                <a href="#">WOK</a>
                <a href="#">Роллы</a>
                <a href="#">Суши</a>
      </div> */}
        <div className="header-logo">
         <Link to='/' ><img src={logo} alt="ROMSEM"/> </Link>
        </div>
        <div className="header-nav">
          <div className="pizza">
            <img src={pizza} alt=""/><Link to='/Pizza'> Пицца</Link>
             
          </div>
          <div className="pizza">
            <img src={set} alt="" /><Link to='/Set'
              >Сеты</Link>
            
          </div>
          <div className="pizza">
            <img src={sok} alt="" /><a href="#"
              >WOK</a
            >
          </div>
          <div className="pizza">
            <img src={rolli} alt="" /><a href="#"
              >Роллы</a
            >
          </div>
          <div className="pizza">
            <img src={sushi} alt="" /><a href="#"
              >Суши</a
            >
          </div>
          <div className="pizza">
            <img src={salat} alt="" /><a href="#"
              >Салаты</a
            >
            <div className="soon-a"><p>скоро</p></div>
          </div>
          <div className="pizza">
            <img src={sup} alt="" /><a href="#"
              >Супы</a
            >
            <div className="soon-b"><p>скоро</p></div>
          </div>
          <div className="pizza">
            <img src={gargidali} alt="" /><a href="#"
              >Корн доги</a
            >
          </div>
          <div className="pizza">
            <img src={icki} alt="" /><a href="#"
              >Напитки</a
            >
          </div>
          <div className="pizza">
            <img src={sehm} alt="" /><a href="#"
              >Акции</a
            >
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar