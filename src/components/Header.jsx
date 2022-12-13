import React,{useRef} from 'react'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
 import { Link } from 'react-router-dom'
 import{AiOutlineClose} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
const Header = () => {
    const OverleyRef=useRef()
    const openOverleyRef=useRef()
    const closeOverleyRef=useRef()
    const openOverley=(e)=>{
      const kliklenenElement=e.target
      if(kliklenenElement.classList.contains('search')){
        OverleyRef.current.classList.add('overley-active')
      }
    }
    const closeOverley=(e)=>{
        const kliklenenElement=e.target 
        if(kliklenenElement.classList.contains('close')){
          OverleyRef.current.classList.remove('overley-active')
        }
      }
  return (
    <>
    <section className="header-section">
    <div className="overley-search" ref={OverleyRef} >
      <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
      <form action="">
        <input type="text" placeholder='search' />
      </form>
    </div>
          <div className="header-logo-media">
            <img src="assets/svgs/logo/logo-1.svg" alt="ROMSEM"/>
          </div>
          <div className="header-tel">
            <div className="tel-a">
              <h5>Наш телефон</h5>
              <a href="tel:+996 705 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 705 188 955</a><br/>
              <a href="tel:+996 555 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 555 188 955</a>
            </div>
            <div className="time">
              <img src= {time} alt="" /><span
                >работаем с 10:00 до 00:00</span
              >
            </div>
          </div>
          <div className="header-main">
            <div className="h-main-left">
              <small>Город:</small>
              <p>Бишкек</p>
            </div>
            <div className="h-main-right">
             <Link to='/Reviews'> <p className='comments'>Отзывы</p> </Link>
              <Link to='/Checkout'><p>Доставка и оплата</p></Link>
            </div>
            <div className="h-main-search">
              <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search' />
            </div>
          </div>
        </section>
    </>
  )
}

export default Header