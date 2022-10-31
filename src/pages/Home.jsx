import React from 'react';
import Header from '../components/Header';
import style from '../components/home.module.css'
const Home = () => {
  return (
    <div>
      <div className={style.flexes}>
      <div className={style.text}>
        <h1>welcome  to Suqadar shoping center</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto reprehenderit est tempore possimus perferendis qui nulla tempora non! Molestias unde est quaerat id assumenda corporis beatae facere! Laudantium beatae animi magnam dolor non! Inventore excepturi facilis delectus fugiat impedit.</p>
        <button className={style.fce}>Hadda Dalbo</button>
      </div>
      <div className={style.image}>
        <img src="/public/business.png" alt="" />
      </div>


      </div>
    </div>
  )
}

export default Home