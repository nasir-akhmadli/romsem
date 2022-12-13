import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import salmon from '../assets/svgs/salmon.svg'
import losos from '../assets/svgs/losos.svg'
import filadelfiya from '../assets/svgs/filadelfiya.svg'
import set5 from '../assets/svgs/set5.svg'
import set4 from '../assets/svgs/set4.svg'
import set6 from '../assets/svgs/set6.svg'
import set7 from '../assets/svgs/set7.svg'
import set8 from '../assets/svgs/set8.svg'
import set9 from '../assets/svgs/set9.svg'
import { Link } from 'react-router-dom'
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000
  };
  return (
    <div className="slider">
        <Slider className="sliderr" {...settings}>
      <div>
      <div className="set-cards">
     <div className="s-cards-a nml">
        <div className="carusel-img">
            <img src={salmon} alt="" />
        </div>
        <p>Саломон сет</p>
        <small>1050 грамм, 30 кусочков</small>
            <div class="s-cards-btn">
                <h1>1500 СОМ</h1>
                <Link to='/Checkout'><button>Хочу!</button></Link>
            </div>
     </div>
     <div className="s-cards-a lmn">
        <div className="carusel-img">
            <img src={filadelfiya} alt="" />
        </div>
        <p>Филадельфия и <br/>
                лосось сет</p>
              <small>1260 грамм, 36 кусочков</small>
              <div class="s-cards-btn">
                <h1>1150 СОМ</h1>
                <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>
     <div className="s-cards-a mln">
        <div className="carusel-img">
            <img src={losos} alt="" />
        </div>
        <p>Самая большая <br/> Филадельфия</p>
              <small>2050 грамм, 45 кусочков</small>
              <div class="s-cards-btn">
                <h1>2100 СОМ</h1>
                <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>

      </div>      
      </div>
      <div>
      <div className="set-cards">
     <div className="s-cards-a nml">
        <div className="carusel-img">
        <img src={set5} alt=""/>
        </div>
        <p>Топовый сет</p>
        <small>1020 грамм 40 кусочек</small>
            <div class="s-cards-btn">
            <h1>1519 СОМ</h1>
            <Link to='/Checkout'><button>Хочу!</button></Link>
            </div>
     </div>
     <div className="s-cards-a lmn">
        <div className="carusel-img">
            <img src={set4} alt="" />
        </div>
        <p>Сет "4 Филадельфии"</p>
                        <small>1100 грамм 32 кусочек</small>
              <div class="s-cards-btn">
              <h1>1559 СОМ</h1>
              <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>
     <div className="s-cards-a mln">
        <div className="carusel-img">
            <img src={set6} alt="" />
        </div>
        <p>Камикадзе сет</p>
                        <small>1200 грамм 52 кусочек</small>
              <div class="s-cards-btn">
              <h1>1469 СОМ</h1>
              <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>

      </div>
      </div>
      <div>
      <div className="set-cards">
     <div className="s-cards-a nml">
        <div className="carusel-img">
            <img src={set7} alt="" />
        </div>
        <p>Филадельфия LOVE сет</p>
                        <small>1000 грамм 40 кусочек</small>
            <div class="s-cards-btn">
            <h1>1479 СОМ</h1>
            <Link to='/Checkout'><button>Хочу!</button></Link>
            </div>
     </div>
     <div className="s-cards-a lmn">
        <div className="carusel-img">
            <img src={set8} alt="" />
        </div>
        <p>Якудза сет</p>
                        <small>1270 грамм 50 кусочек</small>
              <div class="s-cards-btn">
              <h1>1499 СОМ</h1>
              <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>
     <div className="s-cards-a mln">
        <div className="carusel-img">
            <img src={set9} alt="" />
        </div>
        <p>Сет "5 Филадельфий"</p>
                        <small>1120 грамм 40 кусочек</small>
              <div class="s-cards-btn">
              <h1>1499 СОМ</h1>
              <Link to='/Checkout'><button>Хочу!</button></Link>
              </div>
     </div>

      </div>
     </div>
           
      
       
        </Slider>
    </div>
  );
}