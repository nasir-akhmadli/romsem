import React, { useState } from 'react'
import salmonp1 from '../assets/svgs/pizza-section/salmonp1.svg'
import salmonp2 from '../assets/svgs/pizza-section/salmonp2.svg'
import cheap1 from '../assets/svgs/pizza-section/cheap1.svg'
import cheap2 from '../assets/svgs/pizza-section/cheap2.svg'
import cheap3 from '../assets/svgs/pizza-section/cheap3.svg'
import back from '../assets/svgs/back.svg'
import next from '../assets/svgs/next.svg'
import circle11 from '../assets/images/circle11.jpg'
import circle2 from '../assets/images/circle2.jpg'
import circle3 from '../assets/images/circle3.jpg'
import { Link } from 'react-router-dom'
const Rpizza = () => {
    let [ingredientCount, setIngredientCount] = useState(10);
    let [ingredientCountOne, setIngredientCountOne] = useState(140);
    let [ingredientCountTwo, setIngredientCountTwo] = useState(170);
    let [ingredientCountThree, setIngredientCountThree] = useState(180);
    let [ingredientCountFour, setIngredientCountFour] = useState(130);
    let [ingredientCountFıve, setIngredientCountFıve] = useState(150);
    let [ingredientCountSix, setIngredientCountSix] = useState(160);
  return (
    <>
    <div className="header-pizza">
        <div className="container-pizza">
          <section className="pizza-main-section">
            <div className="back">
            <Link to='/' ><img src={back} alt="" /></Link>
                <p>Назад</p>
            </div>
            <div className="next">
                <p>Вперед</p>
               <Link to='/Set'><img src={next} alt="" /></Link>
            </div>
          </section>
          <section className="salmon-set">
            <div className="salmon-img">
                <img src={salmonp1} alt=""/>
            </div>
            <div className="salmon-info">
                <p>Филадельфия и <br/> лосось сет</p>
                <small>290 грамм</small>
                <div className="salmon-measure">
                    <h1>1150 СОМ</h1>
                    <hr onClick={() => setIngredientCount(ingredientCount > 10 ? ingredientCount-- : 0) } />
                    <h2>{ingredientCount}</h2>
                    <button><img onClick={() => setIngredientCount(ingredientCount++) } src={salmonp2} alt=""/></button>
                </div>
                <h6>Состав</h6>
                <div className="salmon-want">
                    <p>Лосось, сыр "Филадельфия", огурец, авокадо</p>
                    <Link to='/Checkout'><button>Хочу!</button></Link>
                </div>
            </div>
          </section>
          <section className="cheap-sushi-set">
            <h1>Рекомендуем к этому товару</h1>
            <div className="cheap-set-cards">
                <div className="cheap-s-cards-a ac">
                    <img src={cheap1} alt=""/>
                    <h6>Филадельфия</h6>
                    <div className="cheap-set-measure">
                        <h2>{ingredientCountOne}COM</h2>
                        <hr onClick={() => setIngredientCount(ingredientCountOne > 140 ? ingredientCountOne-- : 140) } />
                        <button><img onClick={() => setIngredientCountOne(ingredientCountOne++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
                <div className="cheap-s-cards-a ad">
                    <img src={cheap2} alt=""/>
                    <h6>Банзай</h6>
                    <div className="cheap-set-measure">
                    <h2>{ingredientCountTwo}COM</h2>
                        <hr onClick={() => setIngredientCountTwo(ingredientCountTwo > 170 ? ingredientCountTwo-- : 170) } />
                        <button><img onClick={() => setIngredientCountTwo(ingredientCountTwo++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
                <div className="cheap-s-cards-a al">
                    <img src={cheap3} alt=""/>
                    <h6>Аригато</h6>
                    <div className="cheap-set-measure">
                    <h2>{ingredientCountThree}COM</h2>
                        <hr onClick={() => setIngredientCountThree(ingredientCountThree > 180 ? ingredientCountThree-- : 180) } />
                        <button><img onClick={() => setIngredientCountThree(ingredientCountThree++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
            </div>
            <div className="cheap-flex">
                <div className="cheap-s-cards-a ac">
                    <img src={circle11} alt=""/>
                    <h6>Саломон</h6>
                    <div className="cheap-set-measure">
                    <h2>{ingredientCountFour}COM</h2>
                        <hr onClick={() => setIngredientCountFour(ingredientCountFour > 130 ? ingredientCountFour-- : 130) } />
                        <button><img onClick={() => setIngredientCountFour(ingredientCountFour++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
                <div className="cheap-s-cards-a ad">
                    <img src={circle2} alt=""/>
                    <h6>Аригато</h6>
                    <div className="cheap-set-measure">
                    <h2>{ingredientCountFıve}COM</h2>
                        <hr onClick={() => setIngredientCountFıve(ingredientCountFıve > 150 ? ingredientCountFıve-- : 150) } />
                        <button><img onClick={() => setIngredientCountFıve(ingredientCountFıve++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
                <div className="cheap-s-cards-a al">
                    <img src={circle3} alt=""/>
                    <h6>Банзай</h6>
                    <div className="cheap-set-measure">
                    <h2>{ingredientCountSix}COM</h2>
                        <hr onClick={() => setIngredientCountSix(ingredientCountSix > 160 ? ingredientCountSix-- : 160) } />
                        <button><img onClick={() => setIngredientCountSix(ingredientCountSix++) } src={salmonp2} alt=""/></button>
                    </div>
                </div>
                </div>
          </section>
        </div>
    </div>
    </>
  )
}

export default Rpizza