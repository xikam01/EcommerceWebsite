import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const Header = () => {
  return (
    <div>
      <nav className={style.navigation}>
      <div className={style.logo}>
      <h3>suq<span>adara</span></h3>
      </div>
        <div className={style.mune}>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
            <Link to={'/services'}>Services </Link>
            <Link to={'/shoping'}>Shoping </Link>
            <Link to={'/Contact'}>Contact</Link>
            <Link to={'/about'}>About </Link>
            <Link to={'/login'}>Login </Link>
          </li>
        </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header