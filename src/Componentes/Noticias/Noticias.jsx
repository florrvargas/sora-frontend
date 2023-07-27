import React from 'react';
import './Noticias.css';
import noticias from '../../assets/noticias.jpg';
import notaMercurio from '../../assets/noticias/notaMercurio.jpeg'
import notaMercurio2 from '../../assets/noticias/notaMercurio2.jpeg'
import notaSur from '../../assets/noticias/notaSur.jpeg'
import notaSur2 from '../../assets/noticias/notaSur2.jpeg'
import entrevistaIncuba from '../../assets/noticias/entrevistaIncuba.jpeg'


export default function Noticias() {
  return (
    <div className='containerNoticias'>
      <div className="introNoticias">
        <h1>Sora Noticias</h1>
        {/* <img src={noticias} alt="" width='600rem'/> */}
      </div>
      <div className="Noticias">

        <h1>Nota realizada por EL MERCURIO INNOVACIÓN a la fundadora de SORA. </h1>

        <div className="soraNoticias">
          <div className="leftServ">
            <img src={notaMercurio2} alt="" width='700rem'/>
            <span></span>
          </div>
          <div className="rightServ">
            <img src={notaMercurio} alt="" width='700rem'/>
          </div>
        </div>

        <h1>Nota realizada por EL SUR a la fundadora de SORA. </h1>

        <div className="soraNoticias">
          <div className="rightServ">
            <img src={notaSur2} alt="" width='700rem' />
          </div>
          <div className="leftServ">
            <img src={notaSur} alt="" width='800rem' />
            <span></span>
          </div>
        </div>

        <h1>Entrevista con #IncubaUdeC </h1>


        <div className="soraNoticias">
          <div className="leftServ">
            <h1>Romina Celle, CEO del emprendimiento que forma parte del programa "Conectadas: Empoderando Emprendedoras Tecnológicas", se refirió a los próximos desafíos de Sora Chile e invitó a más mujeres a sumarse a esta plataforma que ofrece oportunidades laborales y seguridad en el transporte.</h1><br />
            <span> 🗣️“Sora nace en noviembre del 2022, luego de escuchar a muchas mujeres, particularmente a una. Su historia personal relacionada a la violencia y al sometimiento ejercido de parte de su expareja; más todas las otras situaciones de violencia e inseguridad que viven las mujeres día a día, me llevaron a crear una solución donde permitiera a todas las mujeres generar ingresos, así como también brindar un espacio seguro cuando se trasladan en vehículos particulares. Sora, viene del concepto de sororidad y lo entendemos como la capacidad que tenemos las mujeres de ayudarnos entre unas y otras a pesar de las diferencias que podamos tener”, nos cuenta Romina.</span>
           
          </div>
          <div className="rightServ">
            <img src={entrevistaIncuba} alt="" width='600rem' />
          </div>
        </div>

        <h1>Otra noticias ... </h1>


        <div className="soraNoticias">
        <div className="rightServ">
            <img src={entrevistaIncuba} alt="" width='600rem' />
        </div>
        <div className="leftServ">
            <h1>Entrevista 2...</h1><br />
            <span> 🗣️“Sora nace en noviembre del 2022, luego de escuchar a muchas mujeres, particularmente a una. Su historia personal relacionada a la violencia y al sometimiento ejercido de parte de su expareja; más todas las otras situaciones de violencia e inseguridad que viven las mujeres día a día, me llevaron a crear una solución donde permitiera a todas las mujeres generar ingresos, así como también brindar un espacio seguro cuando se trasladan en vehículos particulares. Sora, viene del concepto de sororidad y lo entendemos como la capacidad que tenemos las mujeres de ayudarnos entre unas y otras a pesar de las diferencias que podamos tener”, nos cuenta @romi.celle.</span>
        
        </div>
        
        </div>

        {/* <div className="soraNoticias2">

<div className="leftServ">
  <h1>Sora Woman</h1>
  <span> Transporte exclusivo para mujeres 👩 </span>
  <span> Úsalo para moverte con amigas, colegas, tías, hijas, etc. Si necesitas ir a una reunión, llevar a tus hijos al médico, ir al aeropuerto este servicio es para tí.</span>
  <span></span>
</div>
<div className="rightServ">
  <img src={soraWoman2} alt="" width='400rem'/>
</div>
</div>

<div className="soraNoticias2">
<div className="leftServ">
  <h1>Sora Pet</h1>
  <span> Transporte exclusivo para mujeres y animalovers 🐶 </span>
  <span> Úsalo para moverte con tu compañero peludo.</span>
  <span>Pide tu Sora Pet y sal al parque con tu amigo fiel.</span>
</div>
<div className="rightServ">
  <img src={soraPet2} alt="" width='280rem' />
</div>
</div>

<div className="soraNoticias2">
<div className="leftServ">
  <h1>Sora Senior</h1>
  <span> Transporte exclusivo para mujeres sobre 60 años🧑‍🦳</span>
  <span> Te llevamos a donde lo necesites y si lo deseas, te acompañamos en tus quehaceres.</span>
  <span>Queremos que nuestras madres, abuelas, tías y amigas mayores sigan juntándose con sus amigas, saliendo a tomar café, yendo a la peluquería y/o comprando sus remedios tranquilas y felices.</span>
</div>
<div className="rightServ">
  <img src={soraSenior2} alt="" width='400rem' />
</div>
</div> */}

      </div>

  
    </div>
  )
}
