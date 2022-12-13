import React,{useRef} from 'react'
import logo from '../assets/svgs/logo.svg'
import pizza from '../assets/svgs/pizza.svg'
import set from '../assets/svgs/set.svg'
import sok from '../assets/svgs/sok.svg'
import rolli from '../assets/svgs/rolli.svg'
import sushi from '../assets/svgs/sushi.svg'
import salat from '../assets/svgs/salat.svg'
import sup from '../assets/svgs/sup.svg'
import gargidali from '../assets/svgs/gargidali.svg'
import kombo from '../assets/svgs/kombo.svg'
import eel1 from '../assets/svgs/eel1.svg'
import eel2 from '../assets/svgs/eel2.svg'
import stock from '../assets/svgs/stock.svg'
import chikenmedia from '../assets/svgs/chikenmedia.svg'
import icki from '../assets/svgs/icki.svg'
import sehm from '../assets/svgs/sehm.svg'
import slider1 from '../assets/svgs/slider1.svg'
import chiken from '../assets/svgs/chiken.svg'
import balig from '../assets/svgs/balig.svg'
import misir from '../assets/svgs/misir.svg'
import menuleft from '../assets/svgs/menuleft.svg'
import menucenter from '../assets/svgs/menucenter.svg'
import menuright from '../assets/svgs/menuright.svg'
import pizzamain from '../assets/svgs/pizzamain.svg'
import sehmmain from '../assets/svgs/sehmmain.svg'
import salmon from '../assets/svgs/salmon.svg'
import losos from '../assets/svgs/losos.svg'
import lf1 from '../assets/svgs/lf1.svg'
import lf2 from '../assets/svgs/lf2.svg'
import lf3 from '../assets/svgs/lf3.svg'
import lf4 from '../assets/svgs/lf4.svg'
import lf5 from '../assets/svgs/lf5.svg'
import lf6 from '../assets/svgs/lf6.svg'
import lf7 from '../assets/svgs/lf7.svg'
import lf8 from '../assets/svgs/lf8.svg'
import filadelfiya from '../assets/svgs/filadelfiya.svg'
import medialogo from '../assets/svgs/medialogo.svg'
import more from '../assets/svgs/more.svg'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
import{BsWhatsapp} from 'react-icons/bs'
import{BsTelegram} from 'react-icons/bs'
import{AiOutlineClose} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
// import { Link } from 'react-router-dom'
const Romsem = () => {
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
        <div className="header-media">
      <section className="header-media-nav">
        <div className="h-media-left">
          <div className="h-media-logo">
            <img src={medialogo} alt=""/>
          </div>
          <div className="h-media-tel">
            <h5>Наш телефон</h5>
            <a href="tel:+996 705 188 955">+996 705 188 955</a>
            <a href="tel:+996 555 188 955">+996 555 188 955</a>
          </div>
        </div>
        <div className="h-media-right">
          <div className="h-media-time">
            <img src= {time} alt=""/>
            <p>работаем</p>
            <span>с 10:00 до 00:00</span>
          </div>
          <div className="h-media-search" >
            <img src={search} alt=""/>
          </div>
        </div>
      </section>
      <section className="header-media-link">
        <div className="link-cards-first">
          <div className="link-first-pics">
            <img src= {lf1} alt=""/>
            <p>Пицца</p>
          </div>
          <div className="link-first-pics">
            <img src= {lf2} alt=""/>
            <p>Сеты</p>
          </div>
           <div className="link-first-pics">
            <img src= {lf3} alt=""/>
            <p>WOK</p>
          </div>
          <div className="link-first-pics">
            <img src= {lf4} alt=""/>
            <p>Роллы</p>
          </div>
          <div className="link-first-pics">
            <img src= {lf5} alt=""/>
            <p>Суши</p>
          </div>
          <div className="link-first-pics">
            <img src= {lf6} alt=""/>
            <p>Супы <span>скоро</span></p>
          </div>
          <div className="link-first-pics">
            <img src= {lf7} alt=""/>
            <p>Салаты <span>скоро</span></p>
          </div>
          <div className="link-first-pics">
            <img src= {lf8} alt=""/>
            <p>Напитки</p>
          </div>
        </div>
        <div className="kombo">
          <img src= {kombo} alt=""/>
          <p>Комбо</p>
        </div>
        <div className="eel">
          <div className="eel-a">
            <img src= {eel1} alt=""/>
            <p>С угрем</p></div>
            <div className="eel-a">
              <img src= {eel2} alt=""/>
              <p>Корн дог</p>
            </div>
        </div>
        <div className="chicken">
          <img src= {chikenmedia} alt=""/>
          <p>Чикен</p>
        </div>
        <div className="stock-media">
          <img src={stock} alt=""/>
          <p>Акции</p>
        </div>
      </section>
      <section className="order-media">
        <h1>Заказать суши в Бишкеке</h1>
        <div className="order-media-main">
          <p>Ресторан “Суши и Лапша” предлагаем <br/> своим клиентам самые вкусные суши с <br/> доставкой на дом, приготовленные  по <br/> классическим и адаптированным к <br/> европейской аудитории рецептам, а <br/> также собственным наработкам наших <br/> поваров. Мы ценим время наших <br/> клиентов, поэтому вы можете заказать <br/> суши в Харькове с доставкой на дом <br/> или в офис.
          </p>
        </div>
        <div className="more-media">
          <h6>Подробнее</h6>
          <img src={more} alt=""/>
        </div>
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
        </div>
      </section>
      <footer className="footer-icon">
        <div className="menu-icon">
          <img src= {menuleft} alt=""/>
        </div>
        <div className="menu-icon">
          <img src= {menucenter} alt=""/>
        </div>
        <div className="menu-icon">
          <img src= {menuright} alt=""/>
        </div>
      </footer>
    </div>
    <div class="header">
      <section class="header-left">
        <div class="header-logo">
          <img src={logo} alt="ROMSEM"/>
        </div>
        <div class="header-nav">
          <div class="pizza">
            <img src={pizza} alt=""/><a href=""> Пицца</a>
             
          </div>
          <div class="pizza">
            <img src={set} alt="" /><a href="#"
              >Сеты</a
            >
          </div>
          <div class="pizza">
            <img src={sok} alt="" /><a href="#"
              >WOK</a
            >
          </div>
          <div class="pizza">
            <img src={rolli} alt="" /><a href="#"
              >Роллы</a
            >
          </div>
          <div class="pizza">
            <img src={sushi} alt="" /><a href="#"
              >Суши</a
            >
          </div>
          <div class="pizza">
            <img src={salat} alt="" /><a href="#"
              >Салаты</a
            >
            <div class="soon-a"><p>скоро</p></div>
          </div>
          <div class="pizza">
            <img src={sup} alt="" /><a href="#"
              >Супы</a
            >
            <div class="soon-b"><p>скоро</p></div>
          </div>
          <div class="pizza">
            <img src={gargidali} alt="" /><a href="#"
              >Корн доги</a
            >
          </div>
          <div class="pizza">
            <img src={icki} alt="" /><a href="#"
              >Напитки</a
            >
          </div>
          <div class="pizza">
            <img src={sehm} alt="" /><a href="#"
              >Акции</a
            >
          </div>
        </div>
      </section>
      <div class="container">
        <section class="header-section">
          <div class="header-logo-media">
            <img src="assets/svgs/logo/logo-1.svg" alt="ROMSEM"/>
          </div>
          <div class="header-tel">
            <div class="tel-a">
              <h5>Наш телефон</h5>
              <a href="tel:+996 705 188 955">+996 705 188 955</a>
              <a href="tel:+996 555 188 955">+996 555 188 955</a>
            </div>
            <div class="time">
              <img src= {time} alt="" /><span
                >работаем с 10:00 до 00:00</span
              >
            </div>
          </div>
          <div class="header-main">
            <div class="h-main-left">
              <small>Город:</small>
              <p>Бишкек</p>
            </div>
            <div class="h-main-right">
              <p>Отзывы</p>
              <p>Доставка и оплата</p>
            </div>
            <div class="h-main-search">
              <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search' />
            </div>
          </div>
        </section>
        <section class="main">
          <div class="main-slider">
            <a href="#"><img src={slider1} alt="" /></a>
          </div>
          <div class="main-pics">
            <div class="m-pics-a">
              <img src={chiken} alt="" />
              <p>Чикен</p>
            </div>
            <div class="m-pics-a">
              <div class="m-pics-left">
                <img src={balig} alt="" />
                <p>С угрем</p>
              </div>
              <div class="m-pics-left right-image">
                <img src={misir} alt="" />
                <p>Корн дог</p>
              </div>
            </div>
            <div class="m-pics-a">
              <img src={pizzamain} alt="" />
              <p>Пицца</p>
            </div>
            <div class="m-pics-a">
              <img src={sehmmain} alt="" />
              <p>Акции</p>
            </div>
          </div>
        </section>
        <section class="sets">
          <div class="new-popular">
            <p>Новинки</p>
            <p>Популярное</p>
          </div>
          <div class="radius-vector">
           <button class="set-vector-left">trtrtgr</button>
           <button class="set-vector-right">grtgrgr</button>
          </div>
          <div class="set-cards">
            <div class="s-cards-a nml">
              <img src={salmon} alt=""/>
              <p>Саломон сет</p>
              <small>1050 грамм, 30 кусочков</small>
              <div class="s-cards-btn">
                <h1>1500 СОМ</h1>
                <button>Хочу!</button>
              </div>
            </div>
            <div class="s-cards-a lmn">
              <img src={filadelfiya} alt=""/>
              <p>Филадельфия и <br/>
                лосось сет</p>
              <small>1260 грамм, 36 кусочков</small>
              <div class="s-cards-btn">
                <h1>1150 СОМ</h1>
                <button>Хочу!</button>
              </div>
            </div>
            <div class="s-cards-a mln">
              <img src={losos} alt=""/>
              <p>Самая большая <br/> Филадельфия</p>
              <small>2050 грамм, 45 кусочков</small>
              <div class="s-cards-btn">
                <h1>2100 СОМ</h1>
                <button>Хочу!</button>
              </div>
            </div>
          </div>
        </section>
        <section class="sushi-order">
          <h1>Заказать суши в Бишкеке</h1>
          <div class="sushi-info">
            <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.<br/>
              <br/>
              В нашем меню более 20 видов суши:</p>
              <p> * Классические с сырым лососем, тунцом, окунем.
                <br/>
                  * Экзотические с тигровой креветкой, морским гребешком.
                <br/>
                  * Пикантные с копченым лососем, угрем.
              </p>
              <div class="sushi-info-footer">
                <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
              </div>
          </div>
          <div class="more">
            <h6>Подробнее </h6>
            <img src={more} alt=""/>
          </div>
          <div class="finish-media">
            <div class="communucation">
              <p>Выберите удобный <br/>
                мессенджер для общения</p>
            </div>
            <div class="social-media-footer">
              <a href="#"><BsWhatsapp className='whatsapp'/></a>
              <a href="#"><i class="fa-brands fa-telegram"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div class="tel-media-footer">
              <a href="tel:+996 705 188 955">Тел:+996 705 188 955 </a>
              <a href="tel:+996 555 188 955">Тел:+996 555 188 955 </a>
              <address>Адрес:Бакаева 126</address>
            </div>
          </div>
        </section>
        <section class="footer-info">
          <div class="holding">
            <h5>О компании</h5>
            <h5>Доставка и оплата</h5>
            <h5>Лента материалов</h5>
            <h5>Политика возврата</h5>
          </div>
          <div class="call">
            <h5>Введите номер</h5>
            <a href="tel:">+996 777 308 808</a>
            <small>Выберите удобный <br/>
              мессенджер для общения</small>
              <div class="social-media">
                <a href="#"><BsWhatsapp className='whatsapp'/></a>
                <a href="#"><BsTelegram className='telegram'/></a>
                <a href="#"><AiFillInstagram className='instagram'/></a>
              </div>
          </div>
          <div class="address">
            <a href="tel:+996 705 188 955">Тел:+996 705 188 955 </a>
            <a href="tel:+996 555 188 955">Тел:+996 555 188 955 </a>
            <address>Адрес:Бакаева 126</address>
          </div>
        </section>
      </div>
    </div>
    </>
    
  )
}

export default Romsem