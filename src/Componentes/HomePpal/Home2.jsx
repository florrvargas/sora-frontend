import React from 'react';


import './Home.css'
import Cards from '../Servicios/Cards';
import soraWoman from '../../assets/SoraWoman.png'
import soraPet from '../../assets/SoraPet.png'
import soraSenior from '../../assets/SoraSenior.png'
import inicio from '../../assets/Inicio.png'
import inicioPortada from '../../assets/InicioPortada.jpg'
import Viajes from '../Perfil/SideBar/Viajes/Viajes';
import Rutas from './Rutas';
import CardNoticias from '../Noticias/CardNoticias'
import notaMercurio from '../../assets/noticias/notaMercurio.jpeg'
import notaSur from '../../assets/noticias/notaSur2.jpeg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Home() {
  return (
    <div className='containerHome'>

    {/* -------------------------------------------------------
    ---------------------- INICIO ----------------------
    ------------------------------------------------------- */}
      <div className="inicio">
        <div className="inicioRight">
        <h1 id='h1'>Planifica tu viaje y muévete con Sora.</h1>
        <span>Sora se encargará de que llegues tranquila y feliz a tu destino.</span>
        <a href="/Conductoras">
        <button className='button'>Vuélvete conductora </button></a>
        </div>
        <img src={inicioPortada} alt="" width='60%' />
      </div>
    {/* -------------------------------------------------------
    ---------------------- SERVICIOS ----------------------
    ------------------------------------------------------- */}
      <div className="serviciosHome">
      <h1>Conoce nuestros servicios</h1>
      <div className="cardsHome">
        <a href="/Servicios">
        <Cards
          nombre='SoraWoman'
          imagen={soraWoman}
          info='Transporte exclusivo para mujeres.'/>
        </a>
        <a href="/Servicios">
        <Cards
          nombre='SoraPet'
          imagen={soraPet}
          info='Transporte exclusivo para mujeres y animalovers.'/>
        </a>
        <a href="/Servicios">
        <Cards
          nombre='SoraSenior'
          imagen={soraSenior}
          info='Transporte exclusivo para mujeres mayores.'/>
        </a>
      </div>
      </div>

    {/* -------------------------------------------------------
    ---------------------- WHY SORA ----------------------
    ------------------------------------------------------- */}
      <div className="whySora">
        <img src={inicio} alt="" width='50%' />
        <div className="inicioRight">
          <h1 >¿Por qué moverte con SORA?</h1>
          <div className="razones">
          <span> ● Somos 100% movilidad entre mujeres.</span>
          <span> ● Las tasas de acoso en lugares públicos y privados van en aumento y las mujeres queremos movernos tranquilas.
          </span>
          <span> ● Cada vez que viajas con Sora, estás aportando en el empoderamiento económico de otra mujer.</span>
          </div>
          <a href="/quienes-somos">
          <button className='button'>Mas información sobre SORA </button>
          </a>
        </div>
      </div>


      {/* -------------------------------------------------------
    ---------------------- NOTICIAS ----------------------
    ------------------------------------------------------- */}
      <div className="noticiasHome">
      <h1> Noticias  </h1>

      <div className="news">
        <div className="cardsNewsHome">
          <a href="/noticias">
          <CardNoticias
            nombre='El Mercurio Innovación'
            imagen={notaMercurio}
            info='Nota realizada a la fundadora de SORA.'/>
          </a>
          <a href="/noticias">
          <CardNoticias
            nombre='El Sur'
            imagen={notaSur}
            info='Nota realizada a Sora.'/>
          </a>
          {/* <a href="/Noticias">
          <CardNoticias
            nombre='Titulo noticia'
            imagen={soraWoman}
            info='Info noticia'/>
          </a> */}
        </div>
          <a href="/noticias">
          <h2>Ver más Noticias</h2>
          {/* <h2>...</h2> */}
          </a>
      </div>
      </div>

    {/* -------------------------------------------------------
    ---------------------- CALCULAR RUTA ----------------------
    ------------------------------------------------------- */}
   <div className='rutas'>
    <Rutas/>
   </div>
    </div>
  )
}



