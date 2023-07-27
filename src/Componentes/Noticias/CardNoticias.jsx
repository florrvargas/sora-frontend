import React from 'react';
import './Noticias.css';

export default function CardNews({nombre, imagen, info}) {
  return (
    <div className="cardNew shadowNew">
        <div className="titlecardNew">
            <h1>{nombre}</h1>
        </div>
        <div className="infocardNew">
            <span>{info}</span>
        </div>
        <div className="imagecardNew">
            <img src={imagen} alt="" width='255rem'/>
        </div>
        <div>
            <a href="/noticias">
                <span>Leer más </span>
            </a>
        </div>
    </div>
  )
}
