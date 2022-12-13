import React from 'react'
import Errorimg from '../assets/images/g-6.gif'
import back from '../assets/svgs/back.svg'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="error">
        <div className="header-left-checkout back-home">
                  <Link to='/'><img src={back} alt=""/></Link>
                    <p>Назад</p>
                  </div>
        <h1 className='error404'>ERROR 404 NOT FOUND</h1>
    </div>
  )
}

export default Error