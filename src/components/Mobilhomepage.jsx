import React, { useRef, useState } from 'react'
import lf1 from '../assets/svgs/lf1.svg'
import lf2 from '../assets/svgs/lf2.svg'
import lf3 from '../assets/svgs/lf3.svg'
import lf4 from '../assets/svgs/lf4.svg'
import lf5 from '../assets/svgs/lf5.svg'
import lf6 from '../assets/svgs/lf6.svg'
import lf7 from '../assets/svgs/lf7.svg'
import lf8 from '../assets/svgs/lf8.svg'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/play.png'
import medialogo from '../assets/svgs/medialogo.svg'
import more from '../assets/svgs/more.svg'
import {BiDownArrowAlt} from 'react-icons/bi'
import {BiUpArrowAlt} from 'react-icons/bi'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
import kombo from '../assets/svgs/kombo.svg'
import eel1 from '../assets/svgs/eel1.svg'
import eel2 from '../assets/svgs/eel2.svg'
import menuleft from '../assets/svgs/menuleft.svg'
import{AiOutlineClose} from 'react-icons/ai'
import menucenter from '../assets/svgs/menucenter.svg'
import menuright from '../assets/svgs/menuright.svg'
import{BsWhatsapp} from 'react-icons/bs'
import{BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import stock from '../assets/svgs/stock.svg'
import chikenmedia from '../assets/svgs/chikenmedia.svg'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Mobilhomepage = () => {
  const [loadMore, setLoadMore] = useState(false)
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
    <div className="header-media home-header">
    <div className="overley-search" ref={OverleyRef} >
      <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
      <form action="">
        <input type="text" placeholder='search' />
      </form>
    </div>
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
          <div className="h-media-search" >
            <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search'/>
          </div>
        </div>
      </section>
      <section className="header-media-link">
        <div className="link-cards-first">
          <div className="link-first-pics">
            <Link to='/Pizza'><img src= {lf1} alt=""/></Link>
            <p>Пицца</p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf2} alt=""/></Link>
            <p>Сеты</p>
          </div>
           <div className="link-first-pics">
           <Link to='/Set'><img src= {lf3} alt=""/></Link>
            <p>WOK</p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf4} alt=""/></Link>
            <p>Роллы</p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf5} alt=""/></Link>
            <p>Суши</p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf6} alt=""/></Link>
            <p>Супы <span>скоро</span></p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf7} alt=""/></Link>
            <p>Салаты <span>скоро</span></p>
          </div>
          <div className="link-first-pics">
          <Link to='/Set'><img src= {lf8} alt=""/></Link>
            <p>Напитки</p>
          </div>
        </div>
        <div className="kombo">
        <Link to='/Set'><img src= {kombo} alt=""/></Link>
          <p>Комбо</p>
        </div>
        <div className="eel">
          <div className="eel-a">
          <Link to='/Set'><img src= {eel1} alt=""/></Link>
            <p>С угрем</p></div>
            <div className="eel-a">
            <Link to='/Set'><img src= {eel2} alt=""/></Link>
              <p>Корн дог</p>
            </div>
        </div>
        <div className="chicken">
        <Link to='/Set'><img src= {chikenmedia} alt=""/></Link>
          <p>Чикен</p>
        </div>
        <div className="stock-media">
        <Link to='/Set'><img src={stock} alt=""/></Link>
          <p>Акции</p>
        </div>
      </section>
      <section className="order-media">
        <h1>Заказать суши в Бишкеке</h1>
        <div className="order-media-main">
            <p>В меню также представлены гунканы: с начинкой из красной икры и тобико,.</p>
                {loadMore &&
                  <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая .</p>
                }
            </div>
            {loadMore ?
            <div className="more-media" onClick={()=>setLoadMore(false)}>
            <h6>Меньше </h6>
            <BiUpArrowAlt className='arrow'/>
            
          </div>
          :
          <div className="more-media" onClick={()=>setLoadMore(true)}>
            <h6>Подробнее </h6>
            <BiDownArrowAlt className='arrow'/>
          </div>
        }
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
      <footer className="footer-icon" >
        <div className="menu-icon" >
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

export default Mobilhomepage