import React from 'react'

import './Card.scss'

const Card = (props) => {

  return (
    <div className="card">
      <div className="card__image">
        <img src='/img/team/Valentina.jpg'/>
      </div>
      <div className="card_member-name">
        Серёжкина Валентина Андреевна
      </div>
      <div className="card_member-role">
        Директор
      </div>
    </div>
  )
}

export default Card
