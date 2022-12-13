import React from 'react'
import qrcode from '../assets/images/qrcode.png'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/play.png'
import{BsWhatsapp} from 'react-icons/bs'
import{BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {SlLocationPin} from 'react-icons/sl'

const Footer = () => {
  return (
    <>
    <section class="footer-info">
          <div class="holding">
            <h5>О компании</h5>
            <h5>Доставка и оплата</h5>
            <h5>Лента материалов</h5>
            <h5>Политика возврата</h5>
          </div>
          <div className="call">
            <h5>Введите номер</h5>
            <a href="tel:" className='phn'><BsFillTelephoneInboundFill className='contacts'/>+996 777 308 808</a>
            <small>Выберите удобный <br/>
              мессенджер для общения</small>
              <div className="social-media">
                <a href="#"><BsWhatsapp className='whatsapp'/></a>
                <a href="#"><BsTelegram className='telegram'/></a>
                <a href="#"><AiFillInstagram className='instagram'/></a>
                {/* <img src={qrcode} alt="" className='qrcode'/> */}
              </div>
          </div>
          <div className="address">
            <a href="tel:+996 705 188 955">Тел:+996 705 188 955 </a>
            <a href="tel:+996 555 188 955">Тел:+996 555 188 955 </a>
            <address><SlLocationPin className='loc'/>Адрес:Бакаева 126</address>
            <span><img src={appstore} alt="" className='qrcode'/>
            <img src={googleplay} alt="" className='qrcodee'/></span>
          </div>
        </section>
    </>
  )
}

export default Footer