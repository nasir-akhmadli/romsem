import React, { useRef, useState } from 'react'
import slmn from '../assets/svgs/slmn.svg'
import tel1 from '../assets/svgs/tel1.svg'
import search from '../assets/svgs/search.svg'
import cash from '../assets/svgs/cash.svg'
import card from '../assets/svgs/card.svg'
import sum from '../assets/svgs/sum.svg'
import salmon2 from '../assets/svgs/salmon2.svg'
import cashBlack from '../assets/svgs/cash-black.svg'
import cardBlack from '../assets/svgs/card-black.svg'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import{AiOutlineClose} from 'react-icons/ai'

const Mobilcheck = () => {
    const [paymentType, setPaymentType] = useState('cash')
    const [deliveryType, setDeliveryType] = useState('courier')
    const [periodType, setPeriodType] = useState('now')
    let [ingredientCount, setIngredientCount] = useState(0)

    function checkout(){
        toast.success("Sifarişiniz qəbul edildi.")
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
            <div className="checkout-media">
                <section className="header-media-nav">
                    <div className="h-media-left">
                        <div className="h-media-logo">
                        <Link to='/'><img src={slmn} alt="" /></Link>
                        </div>
                        <div className="h-media-tel">
                            <h5>Наш телефон</h5>
                            <a href="tel:+996 705 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 705 188 955</a>
                            <a href="tel:+996 555 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 555 188 955</a>
                        </div>
                    </div>
                    <div className="h-media-right">
                        <div className="h-media-time">
                            <img src={tel1} alt="" />
                            <p>работаем</p>
                            <span>с 10:00 до 00:00</span>
                        </div>
                        <div className="h-media-search">
                        <img src={search} alt="" ref={openOverleyRef} onClick={openOverley} className='search'/>
                        </div>
                    </div>
                </section>
                <section className="your-data">
                    <div className="data-top">
                        <h1>Ваши данные</h1>
                        <form action="#">
                            <input type="text" className="surname" placeholder="фамилия" />
                            <input type="text" className="name" placeholder="Имя" />
                        </form>
                        <div className="top-btn">
                            <button className={`courier ${deliveryType === 'courier' ? 'active-select' : ''}`} onClick={() => setDeliveryType('courier')}>
                                Курьером
                                </button>
                            <button className={`pickup ${deliveryType === 'pickup' ? 'active-select' : ''}`} onClick={() => setDeliveryType('pickup')}>Самовывоз</button>
                        </div>
                        <form action="#">
                            <input type="text" className="outside" placeholder="Улица" />
                        </form>
                        <form action="#">
                            <input type="text" className="house" placeholder="Дом" />
                        </form>
                        <form action="#">
                            <input type="text" className="code code-long" placeholder="Номер кредитной карты" />
                        </form>
                        <form action="#">
                            <input type="text" className="code code-a" placeholder="Дата истечения срока" />
                            <input type="password" className="code code-a code-cvv" placeholder="CVV-код" />
                        </form>
                        <div className="pay">
                            <button className={`cash ${paymentType === 'cash' ? 'active-select' : ''}`} onClick={() => setPaymentType('cash')}>
                                <img src={paymentType === 'cash' ? cash : cashBlack} alt=""/>
                                <span>Наличными</span>
                            </button>
                            <button className={`card ${paymentType === 'card' ? 'active-select' : ''}`} onClick={() => setPaymentType('card')}>
                                <img src={paymentType === 'card' ? card : cardBlack} alt=""/>
                                <span>Картой</span>
                            </button>
                        </div>
                    </div>
                    <div className="data-bottom">
                        <div className="sum">
                            <div className="sum-left">
                                <img src={sum} alt="" />
                                <p>Подготовить сдачу с</p>
                            </div>
                            <div className="sum-right">
                                <form action="#">
                                    <input type="text" className="summa" placeholder="Сумма" />
                                </form>
                            </div>
                        </div>
                        <form action="#">
                            <input type="text" className="email" placeholder="E-mail(необязательно)" />
                        </form>
                        <form action="#">
                            <input type="text" className="comment" placeholder="Комменатрий к заказу" />
                        </form>
                        <div className="now-time">
                            <button className={`now ${periodType === 'now' ? 'active-select' : ''}`} onClick={()=>setPeriodType('now')}>На сейчас</button>
                            <button className={`time ${periodType === 'time' ? 'active-select' :''}`} onClick={()=>setPeriodType('time')}>На время</button>
                        </div>
                        <div className="measure-card-media">
                            <div className="measure-card">
                                <h1>Палочки + соусник обычные</h1>
                                <hr onClick={() => setIngredientCount(ingredientCount > 0 ? ingredientCount-- : 0) } />
                                <h2>{ingredientCount}</h2>
                                <img onClick={() => setIngredientCount(ingredientCount++) } src={salmon2} alt=""/>
                            </div>
                        </div>
                        <form action="#">
                            <input type="text" className="promocode" placeholder="Введите промокод" />
                        </form>
                    </div>
                </section>
                <section className="footer-checkout-media">
                    <div className="finish">
                        <div className="approve">
                            <h5>1 товар</h5>
                            <h6>170 СОМ</h6>
                        </div>
                        <div className="approve">
                            <h5>Скидка</h5>
                            <h6>0 СОМ</h6>
                        </div>
                        <div className="approve">
                            <h5>Доставка</h5>
                            <h6>Бесплатно</h6>
                        </div>
                        <div className="approve-a">
                            <h5>Итого</h5>
                            <h6>170 СОМ</h6>
                        </div>
                        <div className="submit">
                            <h5 onClick={checkout}>Оформить заказ</h5>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Mobilcheck