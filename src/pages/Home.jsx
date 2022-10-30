import React from 'react';
import Header from '../components/Header';
import style from '../components/home.module.css'

const Home = () => {
  return (
    <div>
      <div className={style.flexes}>
      <div className={style.image}>
        <img src="/public/business.png" alt="" />
      </div>
      <div className={style.text}>
        <h1>Hello the Business man</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab laborum quasi in assumenda at! Dignissimos voluptatum recusandae aspernatur earum!</p>
        <button className={style.btn}>Hadda Dalbo</button>
      </div>


      </div>
    </div>
  )
}

export default Home