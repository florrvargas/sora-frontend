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
      </div>
      <div className="Noticias">

        <h1>Nota realizada por EL MERCURIO INNOVACIÓN a la fundadora de SORA. </h1>

        <div className="soraNoticias">
          <div className="leftNew">
            <img src={notaMercurio2} alt="" width='700rem'/>
          </div>
          <div className="rightNew">
            <img src={notaMercurio} alt="" width='700rem'/>
          </div>
        </div>

        <h1>Nota realizada por EL SUR a la fundadora de SORA. </h1>

        <div className="soraNoticias">
          <div className="rightNew">
            <img src={notaSur2} alt="" width='700rem' />
          </div>
          <div className="leftNew">
            <img src={notaSur} alt="" width='800rem' />
          </div>
        </div>

        <h1>Entrevista con #IncubaUdeC </h1>


        <div className="soraNoticias">
          <div className="leftNew">
            <h1>Romina Celle, CEO del emprendimiento que forma parte del programa "Conectadas: Empoderando Emprendedoras Tecnológicas", se refirió a los próximos desafíos de Sora Chile e invitó a más mujeres a sumarse a esta plataforma que ofrece oportunidades laborales y seguridad en el transporte.</h1><br />
            <span> 🗣️“Sora nace en noviembre del 2022, luego de escuchar a muchas mujeres, particularmente a una. Su historia personal relacionada a la violencia y al sometimiento ejercido de parte de su expareja; más todas las otras situaciones de violencia e inseguridad que viven las mujeres día a día, me llevaron a crear una solución donde permitiera a todas las mujeres generar ingresos, así como también brindar un espacio seguro cuando se trasladan en vehículos particulares. Sora, viene del concepto de sororidad y lo entendemos como la capacidad que tenemos las mujeres de ayudarnos entre unas y otras a pesar de las diferencias que podamos tener”, nos cuenta Romina.</span>
           
          </div>
          <div className="rightNew">
            <img src={entrevistaIncuba} alt="" width='600rem' />
          </div>
        </div>

        <h1>Otra noticias ... </h1>


        <div className="soraNoticias">
        <div className="rightNew">
            <img src={entrevistaIncuba} alt="" width='600rem' />
        </div>
        <div className="leftNew">
            <h1>Entrevista 2...</h1><br />
            <span> 🗣️“Sora nace en noviembre del 2022, luego de escuchar a muchas mujeres, particularmente a una. Su historia personal relacionada a la violencia y al sometimiento ejercido de parte de su expareja; más todas las otras situaciones de violencia e inseguridad que viven las mujeres día a día, me llevaron a crear una solución donde permitiera a todas las mujeres generar ingresos, así como también brindar un espacio seguro cuando se trasladan en vehículos particulares. Sora, viene del concepto de sororidad y lo entendemos como la capacidad que tenemos las mujeres de ayudarnos entre unas y otras a pesar de las diferencias que podamos tener”, nos cuenta @romi.celle.</span>
        
        </div>
        
        </div>



      </div>

  
    </div>
  )
}
