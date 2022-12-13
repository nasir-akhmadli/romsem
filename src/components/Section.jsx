import React from 'react'
import chiken from '../assets/svgs/chiken.svg'
import balig from '../assets/svgs/balig.svg'
import misir from '../assets/svgs/misir.svg'
import pizzamain from '../assets/svgs/pizzamain.svg'
import sehmmain from '../assets/svgs/sehmmain.svg'
const Section = () => {
  return (
    <>
 
<div className="main-pics">
            <div className="m-pics-a">
              <img src={chiken} alt="" />
              <p>Чикен</p>
            </div>
            <div className="m-pics-a">
              <div className="m-pics-left">
                <img src={balig} alt="" />
                <p>С угрем</p>
              </div>
              <div className="m-pics-left right-image">
                <img src={misir} alt="" />
                <p>Корн дог</p>
              </div>
            </div>
            <div className="m-pics-a">
              <img src={pizzamain} alt="" />
              <p>Пицца</p>
            </div>
            <div className="m-pics-a">
              <img src={sehmmain} alt="" />
              <p>Акции</p>
            </div>
 </div>
    </>
  )
}
export default Section