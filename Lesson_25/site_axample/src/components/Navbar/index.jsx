import React from 'react'
import logo from "./media/Group1.png"
import s from "./index.module.css"

export default function Navbar() {
  return (
    <nav className={["wrapper", s.nav_block].join(" ")}>
        <a href='#'>
            <img src={logo} alt="logo" />
        </a>
        <ul className={s.nav_menu}>
            <li>Главная</li>
            <li>Услуги</li>
            <li>Kейсы</li>
            <li>O компании</li>
            <li>Kонтакты</li>
        </ul>
    </nav>
  )
}
