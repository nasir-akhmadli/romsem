import React from 'react'
import { Link } from 'react-router-dom'
const Setsection = ({product}) => {
  return (
    <div className="main-s-cards" data-aos="zoom-in">
        <div className='set-cards-m'>
            <div className="set-img">
                <img src={product.img} alt="" />
            </div>
        <p>{product.title}</p>
        <small>{product.info}</small>
        <div className="s-cards-btn-m">
            <h1>{product.price}</h1>
            <Link to='/Checkout'><button>Хочу!</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Setsection