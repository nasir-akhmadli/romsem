import React, { useRef, useState } from 'react'
import medialogo from '../assets/svgs/medialogo.svg'
import time from '../assets/svgs/time.svg'
import search from '../assets/svgs/search.svg'
import cheap1 from '../assets/svgs/pizza-section/cheap1.svg'
import cheap2 from '../assets/svgs/pizza-section/cheap2.svg'
import salmonp2 from '../assets/svgs/pizza-section/salmonp2.svg'
import mobilPizza from '../assets/svgs/pizza-section/smallpizza.svg'
import more from '../assets/svgs/more.svg'
import back from '../assets/svgs/back.svg'
import next from '../assets/svgs/next.svg'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/play.png'
import menuleft from '../assets/svgs/menuleft.svg'
import menucenter from '../assets/svgs/menucenter.svg'
import menuright from '../assets/svgs/menuright.svg'
import {BiDownArrowAlt} from 'react-icons/bi'
import {BiUpArrowAlt} from 'react-icons/bi'
import{BsWhatsapp} from 'react-icons/bs'
import{BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from 'react-icons/ai'

const Mobilpizza = () => {
  let [ingredientCount, setIngredientCount] = useState(170);
  let [ingredientCountOne, setIngredientCountOne] = useState(140);
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
      <div className="overley-search" ref={OverleyRef} >
      <span ><AiOutlineClose className='close' ref={closeOverleyRef} onClick={closeOverley} /></span>
      <form action="">
        <input type="text" placeholder='search' />
      </form>
    </div>
     <div className="pizza-media">
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
                 <img src={time} alt=""/>  
                <p>работаем</p>
                <span>с 10:00 до 00:00</span>
              </div>
              <div className="h-media-search">
                <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search'/>
              </div>
            </div>
        </section>
        <section className="pizza-main-section-media">
            <div className="back-media">
                <Link to='/'><img src={back} alt="" /></Link>
                <p>Назад</p>
            </div>
            <div className="next-media">
                <p>Вперед</p>
                <Link to='/Set'><img src={next} alt="" /></Link>
            </div>
        </section>
        <section className="mobil-pizza">
            <div className="mobil-pizza-top">
                <div className="m-pizza-img">
               
                   <img src={mobilPizza} alt="" />
                </div>
                <div className="m-pizza-gram"> 
                    <p>Филадельфия и <br/> лосось сет</p>
                    <small>1260 грамм 36 кусочек</small>
                    <div className="m-pizza-want">
                        <h1>1150 СОМ</h1>
                        <Link to='/Checkout'><button>Хочу!</button></Link>
                    </div>
                </div>
            </div>
            <div className="mobil-pizza-bottom">
                <h1>Состав сета</h1>
                <div className="cheap-set-mobil">
                    <div className="cheap-mobil-card">
                        <img src={cheap1} alt=""/>
                        <h6>Банзай</h6>
                        <h2>140 СОМ</h2>
                    </div>
                    <div className="cheap-mobil-card">
                        <img src={cheap2} alt=""/>
                        <h6>Филадельфия</h6>
                        <h2>140 СОМ</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="pizza-offer">
            <div className="mobil-pizza-bottom">
                <h1>Рекомендуем к этому товару</h1>
                <div className="cheap-set-mobil">
                    <div className="cheap-mobil-card">
                        <img src={cheap2} alt=""/>
                        <h6>Банзай</h6>
                        <div className="plus-card">
                          <h2>{ingredientCount} COM</h2>
                            <hr onClick={() => setIngredientCount(ingredientCount > 170 ? ingredientCount-- : 0) } />
                            <img onClick={() => setIngredientCount(ingredientCount++) } src={salmonp2} alt=""/>
                        </div>
                    </div>
                    <div className="cheap-mobil-card">
                        <img src={cheap1} alt=""/>
                        <h6>Банзай</h6>
                        <div className="plus-card">
                          <h2>{ingredientCountOne} COM</h2>
                            <hr onClick={() => setIngredientCountOne (ingredientCountOne > 150 ? ingredientCountOne-- : 0) } />
                            <img onClick={() => setIngredientCountOne(ingredientCountOne++) } src={salmonp2} alt=""/>
                        </div>
                    </div>
                </div>
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
            <div className="finish-media">
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

export default Mobilpizza 