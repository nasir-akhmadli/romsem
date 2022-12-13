import React, { useEffect, useRef, useState } from 'react'
import medialogo from '../assets/svgs/medialogo.svg'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
import menuleft from '../assets/svgs/menuleft.svg'
import menucenter from '../assets/svgs/menucenter.svg'
import menuright from '../assets/svgs/menuright.svg'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/play.png'
import{BsWhatsapp} from 'react-icons/bs'
import{BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from 'react-icons/ai'
const Mobilreviews = () => {
  const [isReviewInputOpen, setIsReviewInputOpen] = useState(false)
  const [reviews, setReviews] = useState([
      {
          'name': "Елена",
          'time': "02.23.21",
          "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
      },
      {
          'name': "Розалия",
          'time': "02.23.21",
          "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
      },
      {
          'name': "Сергей Гаврилюк",
          'time': "02.23.21",
          "description": "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне"
      }
  ])

  function addReview(e){
      if(e.key === 'Enter'){
          var newReviews = reviews.slice()
          newReviews.unshift({'name': 'Nasir', 'time': new Date().toDateString(), 'description': e.target.value})
          setReviews(newReviews)
      }
  }
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
    <div className="overley-search" ref={OverleyRef} >
      <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
      <form action="">
        <input type="text" placeholder='search' />
      </form>
    </div>
    <div className="reviews-media">
        <section className="header-media-nav">
            <div className="h-media-left">
              <div className="h-media-logo">
              <Link to='/'><img src={medialogo} alt=""/></Link>
              </div>
              <div className="h-media-tel">
                <h5>Наш телефон</h5>
                <a href="tel:+996 705 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 705 188 955</a>
                <a href="tel:+996 555 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 555 188 955</a>
              </div>
            </div>
            <div className="h-media-right">
              <div className="h-media-time">
                <img src= {time} alt=""/>
                <p>работаем</p>
                <span>с 10:00 до 00:00</span>
              </div>
              <div className="h-media-search">
              <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search'/>
              </div>
            </div>
        </section>
        <section className="reviews-media-main">
            <h2>Отзывы</h2>
            <div className="reviews-media-cards">
              {reviews.map(review => {
                  return(
                    <div className="reviews-sergei">
                        <h1>{review.name}<span>{review.time}</span></h1>
                        <p>{review.description}</p>
                    </div>
                  )
              })}
            </div>
            <div className="reviews-media-add">
                <h2 onClick={()=>setIsReviewInputOpen(isReviewInputOpen => !isReviewInputOpen)}>+ Добавить отзыв</h2>
                  {isReviewInputOpen 
                      && <input className='new-rev-med' onKeyPress={(e) => addReview(e)}  />
                  }
            </div>
        </section>
        <section className="order-media order-prbl">
            <div className="communucation">
              <p>Выберите удобный <br/>
                мессенджер для общения</p>
            </div>
            <div className="social-media-footer">
          <a href="#"><BsWhatsapp className='whatsapp'/></a>
          <a href="#"><BsTelegram className='telegram'/></a>
          <a href="#"><AiFillInstagram className='instagram'/></a>
        </div>
            <div className="tel-media-footer">
              <a href="tel:+996 705 188 955">Тел:+996 705 188 955 </a>
              <a href="tel:+996 555 188 955">Тел:+996 555 188 955 </a>
              <address>Адрес:Бакаева 126</address>
              <span><img src={appstore} alt="" className='qrcode mobil app'/>
                             <img src={googleplay} alt="" className='qrcodee mobil app'/></span>
            </div>
        </section>
        <footer className="footer-icon">
        <div className="menu-icon">
          <Link to='/'><img src= {menuleft} alt=""/></Link>
        </div>
        <div className="menu-icon">
          <Link to='/Checkout'><img src= {menucenter} alt=""/></Link>
        </div>
        <div className="menu-icon">
        <Link to='/Reviews'><img src= {menuright} alt=""/></Link>
        </div>
        </footer>
    </div>
    </>
  )
}

export default Mobilreviews