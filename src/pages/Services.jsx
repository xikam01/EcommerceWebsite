import React from 'react'
import Header from '../components/Header'
import style from '../components/services.module.css'

const Services = () => {
  return (
      <div className={style.container}>
      <h1>Our Service</h1>

  <div className={style.boxses}>
  <div className={style.box}>
      <img src='/public/hp-computer.jpg'></img>
      <h5>Lapton <span>hp</span></h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>
<div className={style.box}>
      <img src='/public/serv.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

<div className={style.box}>
      <img src='/public/slide-4.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

<div className={style.box}>
      <img src='/public/a03core.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

<div className={style.box}>
      <img src='/public/shops-4.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>
  </div>

  <br/>
  <div className={style.boxses}>
  <div className={style.box}>
      <img src='/public/shops-3.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>
<div className={style.box}>
      <img src='/public/flash-2.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>
<div className={style.box}>
      <img src='/public/shops-6.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

<div className={style.box}>
<img src='/public/shops-10.png'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

<div className={style.box}>
      <img src='/public/samsung.jpg'></img>
      <h5>iphone</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br/><br/>
      <span>$500</span>
</div>

  </div>


</div>
  )
}

export default Services