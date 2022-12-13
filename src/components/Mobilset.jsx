import React, { useRef, useState} from 'react'
import medialogo from '../assets/svgs/medialogo.svg'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
import n2 from '../assets/svgs/n2.svg'
import sm from '../assets/svgs/sm.svg'
import vector from '../assets/svgs/vector.svg'
import sets1 from '../assets/svgs/sets1.svg'
import sets2 from '../assets/svgs/sets2.svg'
import sets3 from '../assets/svgs/sets3.svg'
import sets4 from '../assets/svgs/sets4.svg'
import sets5 from '../assets/svgs/sets5.svg'
import sets6 from '../assets/svgs/sets6.svg'
import sets7 from '../assets/svgs/sets7.svg'
import sets8 from '../assets/svgs/sets8.svg'
import sets9 from '../assets/svgs/sets9.svg'
import sets10 from '../assets/svgs/sets10.svg'
import sets11 from '../assets/svgs/sets11.svg'
import more from '../assets/svgs/more.svg'
import menuleft from '../assets/svgs/menuleft.svg'
import menucenter from '../assets/svgs/menucenter.svg'
import menuright from '../assets/svgs/menuright.svg'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/play.png'
import {BiDownArrowAlt} from 'react-icons/bi'
import {BiUpArrowAlt} from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from 'react-icons/ai'
const Mobilset = () => {
    const [loadMore, setLoadMore] = useState(false)
    const OverleyRef=useRef()
    const openOverleyRef=useRef()
    const closeOverleyRef=useRef()
    const closeOverleyRefMenu=useRef()
    const openOverley=(e)=>{
      const kliklenenElement=e.target
      if(kliklenenElement.classList.contains('search')){
        OverleyRef.current.classList.add('overley-active')
      }
    }
   
      const openOverleyMenuRef=useRef()
      const overleyMenuRef=useRef()
      const openOverleyMenu=(e)=>{
        const kliklenenElement=e.target
        if(kliklenenElement.classList.contains('bars')){
            overleyMenuRef.current.classList.add('menu-active')
        }

      }
      const closeOverley=(e)=>{
        const kliklenenElement=e.target 
        if(kliklenenElement.classList.contains('close')){
          OverleyRef.current.classList.remove('overley-active')          
        }
      }
      const CloseOverleyRefMain=(e)=>{
        const kliklenenElement=e.target
        if(kliklenenElement.classList.contains('close-icon')){
            overleyMenuRef.current.classList.remove('menu-active')
        }
      }
    return (
        <>
        <div className="overley-menu" ref={overleyMenuRef} >
        <AiOutlineClose className='close-icon' ref={closeOverleyRefMenu} onClick={CloseOverleyRefMain} />
            <a href="">а-з</a>
            <a href="">з-а</a>
            <a href="">сперва минимальные цены</a>
            <a href="">сперва максимальные цены</a>
        </div>
            <div className="overley-search" ref={OverleyRef} >
      <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
      <form action="">
        <input type="text" placeholder='search' />
      </form>
    </div>
            <div className="set-media">
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
                            <img src={time} alt="" />
                            <p>работаем</p>
                            <span>с 10:00 до 00:00</span>
                        </div>
                        <div className="h-media-search">
                        <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search'/>
                        </div>
                    </div>
                </section>
                <section className="set-sorting">
                    <div className="set-media-icon">
                        <img src={n2} alt="" />
                        <p>Сеты</p>
                    </div>
                    <div className="set-media-sorting">
                        <img src={sm} alt="" className='bars' ref={openOverleyMenuRef} onClick={openOverleyMenu}/>
                        <p>Сортировка</p>
                        <img src={vector} alt="" />
                    </div>
                </section>
                <section className="set-main-media">
                    <div className="set-media-cards"  data-aos="zoom-in">
                        <img src={sets1} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Саломон сет</p>
                                <small>1050 грамм, 30 кусочков</small>
                            </div>
                            <div className="set-m-bottom">
                                <h1>1500 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards">
                        <img src={sets2} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Филадельфия LOVE сет</p>
                                <small>1000 грамм 40 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1479 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards"  data-aos="zoom-in">
                        <img src={sets3} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Сет "5 Филадельфий"</p>
                                <small>1120 грамм 40 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1499 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets4} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Филадельфия и лосось сет</p>
                                <small>1260 грамм 36 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1599 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets5} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Саломон сет</p>
                                <small>1050 грамм, 30 кусочков</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1500 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets6} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Сет "6 Филадельфий"</p>
                                <small>1320 грамм 46 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1559 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets7} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Топовый сет</p>
                                <small>1020 грамм 40 кусочек</small>
                            </div>
                            <div className="set-m-bottom">
                                <h1>1469 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets8} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Камикадзе сет</p>
                                <small>1200 грамм 52 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1559 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets9} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Сет "4 Филадельфии"</p>
                                <small>1100 грамм 32 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1559 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets11} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Филадельфия LOVE сет</p>
                                <small>1000 грамм 40 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1479 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="set-media-cards" data-aos="zoom-in">
                        <img src={sets10} alt="" />
                        <div className="set-m-right">
                            <div className="set-m-top">
                                <p>Якудза сет</p>
                                <small>1270 грамм 50 кусочек</small>
                            </div>
                            <div className="set-m-bottom" data-aos="zoom-in">
                                <h1>1499 СОМ</h1>
                                <Link to='/Checkout'><button>Хочу!</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="order-media set-problem">
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
                    <div className="finish-media">
                        <div className="communucation">
                            <p>Выберите удобный <br />
                                мессенджер для общения</p>
                        </div>
                        <div className="social-media-footer">
                            <a href="#"><BsWhatsapp className='whatsapp' /></a>
                            <a href="#"><BsTelegram className='telegram' /></a>
                            <a href="#"><AiFillInstagram className='instagram' /></a>
                        </div>
                        <div className="tel-media-footer">
                            <a href="tel:+996 705 188 955">Тел:+996 705 188 955 </a>
                            <a href="tel:+996 555 188 955">Тел:+996 555 188 955 </a>
                            <address>Адрес:Бакаева 126 </address>
                            <span><img src={appstore} alt="" className='qrcode mobil app'/>
                             <img src={googleplay} alt="" className='qrcodee mobil app'/></span>
                        </div>
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

export default Mobilset