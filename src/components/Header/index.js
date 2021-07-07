import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss' 

import Navigation from './Navigation/index.js'

const Header = () => {

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">
            <img src="/img/logo.jpg" alt=""/></NavLink>
        </div>
        <div className="fund">
          <div className="fund-status">
            Автономная некоммерческая организация помощи семьи и детям
          </div>
          <div className="fund-name">
            От сердца к сердцу
          </div>
        </div>
        <div className="contacts">
          <div className="contacts__phone">
          {/* <a href="tel:+7000000000">1-562-867-5309</a> */}
            +7 <span className="item_font-red">(930)</span> 401-67-57
          </div>
          <div className="contacts__email">
            otserdcakcerdcy36@mail.ru
          </div>
          <div className="contacts__adress">
            г. Воронеж, Ул. Хользунова 107 E
          </div>
        </div>
        <Navigation/>
      </header>
    </div>
  )
}

export default Header
