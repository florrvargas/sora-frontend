import React from 'react';
import './QuienesSomos.css';
import nosotras from '../../assets/Nosotras.png'
import movete from '../../assets/MoveteSeguraFeliz.png'
import inseguras from '../../assets/55.png'
import inicio from '../../assets/Inicio.png'
import soraWoman from '../../assets/SoraWoman.png'
import soraPet from '../../assets/SoraPet.png'
import soraSenior from '../../assets/SoraSenior.png'
import Cards from '../Servicios/Cards';


export default function QuienesSomos() {
  return (
    <div className='containerNosotras'>
      
{/*---------------------- INTRO ----------------------*/}    

      <div className="inicioNos">
        <div className="leftNos">
          <h1>Bienvenida a Sora.</h1>
          <h1>Somos una empresa  
          de traslado entre mujeres.
          </h1>
        </div>
        <div className="rightNos">
          <img src={nosotras} alt="" width='500rem' />
        </div>
      </div>
 
{/*-------------------- NOSOTRAS --------------------*/}    
   
      <div className="inicioNos">
        <div className="rightNos">
          <img src={movete} alt="" width='400rem' />
        </div>
        <div className="leftNos">
          <h1>Con Sora, nos movemos tranquilas, seguras y felices.</h1>
          <span></span>
        </div>
      </div>

      <div className="inicioNos">
        <div className="leftNos">
          <h1>Sora es 100% movilidad entre mujeres.
          </h1>
          <span></span>
          <span></span>
        </div>
        <div className="rightNos">
          <img src={inseguras} alt="" width='400rem' />
        </div>
      </div>

      {/* -------------------------------------------------------
    ---------------------- WHY SORA ----------------------
    ------------------------------------------------------- */}
      <div className="inicioNos">
        <img src={inicio} alt="" width='50%' />
        <div className="inicioRight">
          <h1>¿Por qué moverte con SORA?</h1>
          <div className="razones">
          <span> ● Somos 100% movilidad entre mujeres.</span>
          <span> ● Las tasas de acoso en lugares públicos y privados van en aumento y las mujeres queremos movernos tranquilas.
          </span>
          <span> ● Cada vez que viajas con Sora, estás aportando en el empoderamiento económico de otra mujer.</span>
          </div>
        </div>
      </div>

      <div className="inicioNos">
        <h1>Servicios</h1>
      </div>
      <div className="inicioNos">
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

      <div className="inicioNos">
        <a href="/conductoras">
          <button className='buttonConduct'> QUIERO SER CONDUCTORA</button>
          </a>
      </div>





















{/*-------------------- Mobile --------------------*/}  
      <div className="inicioNos2">
        <div className="leftNos">
          <h1>Bienvenida a Sora.</h1>
          <h1>Somos una empresa  
          de traslado entre mujeres.
          </h1>
        </div><br/>
        <div className="rightNos">
          <img src={nosotras} alt="" width='500rem' />
        </div>
      </div>

      <div className="inicioNos2">
        <div className="leftNos">
          <h1>Con Sora, nos movemos tranquilas, seguras y felices.</h1>
          {/* <span></span> */}
        </div><br/>
        <div className="rightNos">
          <img src={movete} alt="" width='400rem' />
        </div>
      </div>

      <div className="inicioNos2">
        <div className="leftNos">
          <h1>Sora es 100% movilidad entre mujeres.
          </h1>
          {/* <span></span>
          <span></span> */}
        </div><br/>
        <div className="rightNos">
          <img src={inseguras} alt="" width='400rem' />
        </div>
      </div>

      <div className="inicioNos2">
        
        <div className="inicioRight">
          <h1>¿Por qué moverte con SORA?</h1>
          <div className="razones">
          <span> ● Somos 100% movilidad entre mujeres.</span>
          <span> ● Las tasas de acoso en lugares públicos y privados van en aumento y las mujeres queremos movernos tranquilas.
          </span>
          <span> ● Cada vez que viajas con Sora, estás aportando en el empoderamiento económico de otra mujer.</span>
          </div>
        </div>
      </div>

      <div className="inicioNos2">
      <h1>Servicios</h1>
      </div>
      <div className="inicioNos2">

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
      <div className="inicioNos2">
        <a href="/conductoras">
          <button className='buttonConduct'> QUIERO SER CONDUCTORA</button>
          </a>
      </div>




    </div>
  )
}
