import React, { useState } from 'react'
import back from '../assets/svgs/back.svg'
import tel1 from '../assets/svgs/tel1.svg'
import cash from '../assets/svgs/cash.svg'
import cashBlack from '../assets/svgs/cash-black.svg'
import card from '../assets/svgs/card.svg'
import cardBlack from '../assets/svgs/card-black.svg'
import sum from '../assets/svgs/sum.svg'
import salmonp2 from '../assets/svgs/pizza-section/salmonp2.svg'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const Checkoutt = () => {
    const [paymentType, setPaymentType] = useState('cash')
    const [deliveryType, setDeliveryType] = useState('courier')
    const [periodType, setPeriodType] = useState('now')
    let [ingredientCount, setIngredientCount] = useState(0)

    function checkout(){
        toast.success("Sifarişiniz qəbul edildi.")
    }

    return (
    <>
    <section className="checkout">
        <div className="header-checkout">
            <section className="header-nav-checkout">
                  <div className="header-left-checkout">
                  <Link to='/' ><img src={back} alt="" /></Link>
                    <p>Продолжить выбор</p>
                  </div>
                  <div className="header-center-checkout">
                    <h5>Наш телефон</h5>
                    <a href="tel:+996 705 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 705 188 955</a>
                    <a href="tel:+996 555 188 955"><BsFillTelephoneInboundFill className='phone'/>+996 555 188 955</a>
                    <div className="time-nav">
                        <img src={tel1} alt="" /><span
                          >работаем с 10:00 до 00:00</span
                        >
                      </div>
                  </div>
            </section>
        </div>
        <div className="data">
            <h1>Ваши данные</h1>
        </div>
        <div className="checkout-center">
            <div className="left-side">
                <form action="#">
                    <input type="text" className="left-tel" placeholder="фамилия"/>
                    <input type="text" className="left-name" placeholder="Имя"/>
                </form>
                <div className="left-btn">
                    <button className={`cash ${paymentType === 'cash' ? 'active-select' : ''}`} onClick={() => setPaymentType('cash')}>
                        <img src={paymentType === 'cash' ? cash : cashBlack} alt=""/> <span>Наличными</span>
                    </button>
                    <button className={`card ${paymentType === 'card' ? 'active-select' : ''}`} onClick={() => setPaymentType('card')}>
                        <img  src={paymentType === 'card' ? card : cardBlack} alt=""/> <span>Картой</span>
                    </button>
                </div>
                <div className="sum">
                    <div className="sum-left">
                        <img src={sum} alt=""/>
                        <p>Подготовить сдачу с</p>
                    </div>  
                    <div className="sum-right">
                        <form action="#">
                            <input type="text" className="summa" placeholder="Сумма"/>
                        </form>
                    </div>              
                </div>
                <form action="#">
                    <input type="text" className="comment" placeholder="Комменатрий к заказу"/>
                </form>
                <div className="salmon-measure-check">
                    <div className="measure-card">
                        <h1>Палочки + соусник обычные</h1>
                        <hr onClick={() => setIngredientCount(ingredientCount > 0 ? ingredientCount-- : 0) } />
                        <h2>{ingredientCount}</h2>
                        <img onClick={() => setIngredientCount(ingredientCount++) } src={salmonp2} alt=""/>
                    </div>
                </div>
                <form action="#">
                    <input type="text" className="procode" placeholder="Введите промокод"/>
                </form>
            </div>
            <div className="right-side">
                <div className="right-btn">
                    <button className={`courier ${deliveryType === 'courier' ? 'active-select' : ''}`} onClick={() => setDeliveryType('courier')}>
                        Курьером
                    </button>
                    <button className={`pickup ${deliveryType === 'pickup' ? 'active-select' : ''}`} onClick={() => setDeliveryType('pickup')}>
                        Самовывоз
                    </button>
                </div>
                <form action="#">
                    <input type="text" className="outside" placeholder="Улица"/>
                    <input type="text" className="house" placeholder="Дом"/>
                </form>
                <form action="#">
                            <input type="text" className="code code-long" placeholder="Номер кредитной карты" />
                        </form>
                        <form action="#">
                            <input type="text" className="code code-a" placeholder="Дата истечения срока" />
                            <input type="password" className="code code-a code-cvv" placeholder="CVV-код" />
                        </form>
                <div className="now-time">
                    <button className={`now ${periodType === 'now' ? 'active-select' : ''}`} onClick={()=>setPeriodType('now')}>На сейчас</button>
                    <button className={`timee ${periodType === 'timee' ? 'active-select' :''}`} onClick={()=>setPeriodType('timee')}>На время</button>
                </div>
                <form action="#">
                    <input type="email" className="email" placeholder="E-mail(необязательно)"/>
                </form>
            </div>
        </div> 
        <div className="footer-checkout">
            <div className="design-footer">
                <h5 onClick={checkout}>Оформить заказ</h5>
            </div>
            <p>Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в <br/> соответствии с <ins>Публичной оффертой</ins></p>
        </div>
    </section>
    </>
  )
}

export default Checkoutt