import React from 'react'
import Header from '../components/Header'
import style from '../components/services.module.css'
const Services = () => {
  return (
    <div className={style.container}>
          <h1>Our Service</h1>
      <div className={style.boxses}>
      <div className={style.box}>
          <h5>iphone</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img src='/public/samsung.jpg'></img>
    </div>
    <div className={style.box}>
          <h5>iphone</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img src='/public/samsung.jpg'></img>
    </div>
          </div>
    
    </div>
  )
}

export default Services