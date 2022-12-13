import React, { useState } from 'react'
import more from '../assets/svgs/more.svg'
import {BiDownArrowAlt} from 'react-icons/bi'
import {BiUpArrowAlt} from 'react-icons/bi'
const Order = () => {
  const [loadMore, setLoadMore] = useState(false)

  return (
    <>
    <section className="sushi-order">
          <h1>Заказать суши в Бишкеке</h1>
          <div className="sushi-info">
            <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.<br/>
              <br/>
              В нашем меню более 20 видов суши:</p>
              <p> * Классические с сырым лососем, тунцом, окунем.
                <br/>
                  * Экзотические с тигровой креветкой, морским гребешком.
                <br/>
                  * Пикантные с копченым лососем, угрем.
              </p>
              <div className="sushi-info-footer">
                <p>В меню также представлены гунканы: с начинкой из красной икры и тобико,.</p>
                {loadMore &&
                  <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая .</p>
                }
              </div>
          </div>
          {loadMore ?
            <div className="more" onClick={()=>setLoadMore(false)}>
              <h6>Меньше </h6>
              <BiUpArrowAlt className='arrow'/>
            </div>
            :
            <div className="more" onClick={()=>setLoadMore(true)}>
              <h6>Подробнее </h6>
              <BiDownArrowAlt className='arrow'/>
            </div>
          }
          </section>
    </>
   
  )
}

export default Order