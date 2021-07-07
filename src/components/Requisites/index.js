import React from 'react'
import './Requisites.scss'

import { YMaps, Map, Placemark } from "react-yandex-maps";

const Requisites = () => {

  const mapData = {
    center: [51.700592, 39.149784],
    zoom: 17,
  };
  
  const coordinates = [
    [51.700592, 39.149784]
  ];

  return (
    <div className="requisites-wrapper">
      <div className="contacts">
        <div className="requisites__item requisites__phone">
          +7 <span className="item_font-red">(930)</span> 401-67-57
        </div>
        <div className="requisites__item requisites__email">
          otserdcakcerdcy36@mail.ru
        </div>
        <div className="requisites__item requisites__adress">
          г. Воронеж, ул. Хользунова 107 Е
        </div>
      </div>
      <div className="requisites__item requisites-wrapper__map">
        <YMaps>
          <Map width='800px' height='400px' defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
          </Map>
        </YMaps>
      </div>
    </div>
  )
}

export default Requisites
