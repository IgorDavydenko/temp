import React from 'react'
import { Navdivnk, NavLink } from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {

  return (
    <nav className='navigation-wrapper'>
      <div className='navigation'>
        <div className='navigation__item'>
          <NavLink 
            to="/projects"
            activeClassName="active">Проекты</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/team"
              activeClassName="active">Команда</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/documents"
              activeClassName="active">Документы</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/requisites"
              activeClassName="active">Реквизиты</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/partners"
              activeClassName="active">Партнёры</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/gratitude"
              activeClassName="active">Нам говорят спасибо</NavLink>
        </div>
        <div className='navigation__item'>
          <NavLink 
              to="/photos"
              activeClassName="active">Фотоотчёты</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
