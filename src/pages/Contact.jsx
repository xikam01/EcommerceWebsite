import React from 'react'
import Header from '../components/Header'
import style from '../components/Contact.module.css'
const Contact = () => {
  return (
    <div>
        <div className={style.flex}>
          <div className={style.image}>
            <img src="/public/contacts.png" alt="" />
          </div>
          <div className={style.form}>
            <h1>Contact</h1>
            <input type="text" name="" id="" placeholder='username or Email phone'/> <br />
            <input type="password" name="" id="" placeholder='password' /> <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button>Send</button>
            
          </div>
        </div>
    </div>
  )
}

export default Contact