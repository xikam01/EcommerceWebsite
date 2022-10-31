import React from 'react'
import Header from '../components/Header'
import style from '../components/shopin.module.css'
const Shoping = () => {
  return (
    <div className={style.container}>
    <h1>Shoping Now</h1>

<div className={style.boxses}>
<div className={style.box}>
    <img src='/public/adeee1.png'></img>
    <h6>plan <span>busiess</span></h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$20</span>
</div>
<div className={style.box}>
    <img src='/public/adeeg2.png'></img>
    <h6>cart</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$50</span>
</div>

<div className={style.box}>
<img src='/public/adeeg3.png'></img>
    <h6>gift</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$560</span>
</div>

<div className={style.box}>
<img src='/public/adeeeg4.png'></img>
    <h6>loading..</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$70</span>
</div>

<div className={style.box}>
<img src='/public/adeeg5.png'></img>
    <h6>waiting</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$80</span>
</div>
</div>

<br/>

<div className={style.boxses}>
<div className={style.box}>
<img src='/public/ageed5.png'></img>
    <h6>marketing</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$90</span>
</div>
<div className={style.box}>
<img src='/public/adeeg7.png'></img>
    <h6>cart</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$500</span>
</div>
<div className={style.box}>
<img src='/public/adeeg8.png'></img>
    <h6>toger</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$30</span>
</div>

<div className={style.box}>
<img src='/public/adeeg9.png'></img>
    <h6>bag</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$10</span>
</div>

<div className={style.box}>
<img src='/public/adee10.png'></img>
    <h6>style</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br/><br/>
    <span>$20</span>
</div>

</div>

{/* responise */}


</div>
  )
}

export default Shoping