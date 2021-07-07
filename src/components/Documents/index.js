import React from 'react'

import './Documents.scss'
import Card from './Card'

const Documents = (props) => {

  return (
    <div className="documents">
      <Card 
          preview="/img/docs/Licence.jpeg"
          path="/files/Licence.pdf"
          title="Свидетельство о регистрации"/>
      <Card 
          preview="/img/docs/FNS.jpeg"
          path="/files/FNS.pdf"
          title="Свидетельство о постановке на налоговый учет"/>
      <Card 
          preview="/img/docs/EGR.jpeg"
          path="/files/EGR.pdf"
          title="Выписка ЕГР"/>
      <Card 
          preview="/img/docs/Ustav.jpeg"
          path="/files/Ustav.pdf"
          title="Устав"/>
      {/* <a href="/files/Licence.pdf" target="_blank">licence</a> */}
    </div>
  )
}

export default Documents
