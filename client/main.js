/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={{ height: '200px' }}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[
                // { label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'LA BODA', href: 'wedding' },
                { label: 'RSVP', href: 'rsvp' },
                { label: 'LOGÍSTICA', href: 'logistics' },
                { label: 'QUE HACER', href: 'thingstodo' },
                { label: 'REGALOS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="wedding" title="La BODA">
      <div className="container">
        <div className="one-half column">
          <h2>CEREMONIA</h2>
          <p>XX:X hrs, en la Parroquia Santa Maria de la Asuncion Acapetlahuaca (Ex convento Franciscano).</p>
          <p>
            <a href="img/exconvento.jpg"><img className="location-image" src="img/exconvento.jpg" alt="Ex convento Fransiscano" /></a>
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/LNEiiYkH6c42">Ver en mapa</a>
          </p>
          <p>El lugar para la ceremonia religiosa se encuentra muy cerca del zócalo de Atlixco, pero está ubicada en un lugar elevado, 
          no hay de qué preocuparse, los automóviles entran hasta la iglesia y tenemos disponible la explanada para estacionar los coches, 
          así que estarás en la puerta de la misma. Sólo te pedimos respetar la orientación de los autos para tener espacio para todos.
          </p>
        </div>
        <div className="one-half column">
          <h2>RECEPCIÓN</h2>
          <p>19:00 en Las palomas Atlixco</p>
          <p>
            <a href="img/palomas.jpg"><img className="location-image" src="img/palomas.jpg" alt="Las palomas atlixco" /></a>
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/wCh9CVCXHoN2">Ver en mapa</a>
          </p>
          <p>Después de la ceremonia religiosa los esperamos en el Jardín Campestre “Las Palomas”, ubicado en Calle Felipe Carrillo 
          Puerto #702, Colonia Ricardo Flores Magón, Atlixco, Puebla. Para la comodidad de todos, habrá servicio de vigilancia y valet 
          parking, ven preparado para bailar, cantar y festejar con nosotros.
          </p>
        </div>
      </div>

      <hr />

      <h2>EL DIA DE LA BODA</h2>
      <p>Te pedimos salir de tu hotel con tiempo suficiente, ya que como te comentamos, la iglesia está en el centro de Atlixco y 
      a veces el tráfico es un poco lento, en el directorio que está adjunto a la invitación (y disponible aquí) te pusimos opciones 
      que creemos necesarias para cualquier contratiempo, siéntete libre de usarlas haciendo referencia al evento.
      </p>
      <p>Después de la ceremonia religiosa te agradeceríamos que ofrecieras los espacios disponibles en tu coche para 
      los invitados que no tengan transporte.
      </p>
      <hr />
      <h2>EL DÍA ANTES DE LA BODA</h2>
      <p> Nosotros ya estaremos en Atlixco para el viernes por la noche, así que estaremos disponibles en nuestros celulares.
      </p>
      <hr />
      <h2>CÓDIGO DE VESTUARIO</h2>
      <p> Cómo te habrás dado cuenta, el estilo de la boda es Mexicano, pero al ser un evento de noche te solicitamos vestir FORMAL, 
      agregando un toque Mexicano, en el caso de las mujeres una prenda bordada, un rebozo o un accesorio podrán dar el toque mexicano. 
      En el caso de los varones, les damos la opción de asistir de Guayabera, preferentemente de manga larga y con pantalón de vestir.
      </p>
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logística">
      <p>El clima en Atlixco es templado, tendiendo a caluroso, por lo que el día de la boda esperamos alrededor de 25° durante el día,  
      y al caer la tarde descenderá un poco la temperatura, por lo tanto recomendamos tener a la mano algo para cubrirse.
      </p>
      <hr />

      <h2>COMO LLEGAR A ATLIXCO</h2>
      <p>Se ubica a 25 km de la ciudad de Puebla, capital del Estado y cuenta con dos importantes vías de acceso: la Carretera Federal 190 y 
      la moderna Autopista Vía Atlixcáyotl ($40, te ahorraras como 15-20 minutos).
      </p>
      <p>No hay autobuses directos, tienes que llegar a la CAPU o alguna otra terminal de ORO/ERCO (<a href="https://goo.gl/maps/aSEKkc6bA3x">Col. La Paz</a> 
      | <a href="https://goo.gl/maps/xkTEBrfTJwH2">Caseta Atlixcayotl</a>), el costo de es aprox. $35 por persona, el tiempo de traslado es de casi 
      una hora  de terminal a terminal desde la CAPU. (En Atlixco la terminal esta a 600 metros del zocalo).
      </p>
     
      <h2>HOSPEDAJE</h2>
      <p>Once on the island in Hvar Town there are various accommodation options ranging from fancy hotels to renting an apartment
         on <a href="https://goo.gl/uHTDYn">AirBnB</a>. The wedding will be in the Amfora Resort so any accommodation within walking
         distance from there should be fine.
      </p>
      <p>From our research we have found that hotels are fairly expensive and there are very nice AirBnB options available, so we highly
         recommend doing that.
      </p>
      <p>For guests wishing to stay in a hotel, the <a href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels offers a 20%
         discount using <SecretTooltip fnTooltip={() => { return 'WEDDKALOIANJOCELYN'; }}>this code</SecretTooltip> (please click on the
         'this' in order to show it). The code must be entered in the <i>"Corporate/Promo Code ?"</i> section for the discounted prices to
         apply and is valid for staying 5 days prior and 5 days after the wedding day. While this code indeed reduces the listed prices,
         we have found that booking through <a href="https://goo.gl/2xzaIg">Expedia</a> or <a href="https://goo.gl/z6zsZk">Hotels.com</a>&nbsp;
         shows about the same prices or in some cases even cheaper, so please bear that in mind as well.
      </p>
    </TopicContainer>

    <TopicContainer id="thingstodo" title="Cosas que hacer en Atlixco">
      <h2><a href="https://www.mexicodesconocido.com.mx/escapadas/atlixco.html">ATLIXCO</a></h2>
      <p>En las faldas del Popocatépetl, en el estado de Puebla, se encuentra el pueblo mágico de Atlixco que, rodeado de monumentos 
      históricos y vegetación tiene todo para cautivar a cualquiera. Te invitamos a que explores las calles de esta joya Poblana.
      </p>
      <br />
      <ul>
        <li>
          Visita el <b>Palacio Municipal</b> de Atlixco, también conocido como la Villa de Carrión. Fue inaugurado en 1908 después 
          de siglos de construcción. Aquí se encuentran los murales de Juan Manuel Martínez Caltenco, los cuales cuentan la historia 
          de la fundación de éste poblado.
        </li>
        <li>
          Ve al <b>kiosco de dos pisos</b> que se encuentra en el zócalo, a un costado de la Parroquia de Santa Marta de la Natividad, 
          ahí podrás tomar un café mientras disfrutas de la vista.
        </li>
        <li>
          Recorre el <b>Ex Convento del Carmen</b>, una de las construcciones más antiguas de Atlixco. Alguna vez éste fue habitado por las 
          Carmelitas Descalzas, hoy en día en este espacio se encuentran dos museos: el Museo de las Culturas del Valle y el Museo de Santa Clara.
        </li>
        <li>
          El <b>Antiguo Hospital de San Juan de Dios</b>, originalmente fundado por una orden de curas juaninos. Hoy, en su claustro está la Pinoteca, 
          lugar donde se reguardan las obras de San Juan de Dios creadas por los artistas virreinales Luis Berrueco y Pablo Talavera.
        </li>
        <li>
          La Calle Emblemática de Atlixco, que en realidad se llama <b>Avenida Hidalgo</b>, es uno de los puntos más significativos de este pueblo. La calle 
          está decorada con casas de colores, balcones con flores y faroles. Una caminata por aquí es algo de lo que no te puedes perder.
        </li>
        <li>
          Sobre la avenida Hidalgo hallarás los <b>Helados Ximitl</b>, donde se experimenta con los sabores que la imaginación y las temporadas permitan.
          En esta heladería existen sabores como el de chapulín, polvorón sevillano, pinole e incluso chile en nogada.
        </li>
        <li>
          Dentro de la antigua hacienda de cereales está la <b>cervecería 5 de Mayo</b>. Toma un tour por las instalaciones y aprende todo acerca del proceso de 
          producción de la cerveza, al final podrás tomarte unas de éstas bien frías. $35 por adulto disponible Sábados y Domingos: de 12:00 a 18:00hrs.
        </li>
        <li>
          La cercanía del pueblo al volcán Popocatépetl hace que sus tierras sean extremadamente fértiles. Es por esto que debes visitar los <b>viveros de la 
          colonia Cabrera</b>, ahí encontrarás flores de todo tipo, las cuales te podrás llevar contigo.
        </li>
        <li>
          Comúnmente las mojigangas son utilizadas en desfiles durante las fiestas, pero si quieres llevarte una a tu hogar, en <b>Casa Amantoli</b>, 
          una tienda de artesanías en la Calle Emblemática, podrás adquirir la versión miniatura de estas figuras.
        </li>
        <li>
          En el <b>Mercado Benito Juárez</b> hallarás las delicias típicas de Atlixco como cecina,barbacoa, consomé atlixquense y los mixotes de carnero.
        </li>
        <li>
          <b>Plaza del Huey Atlixcayotl</b>,  en esta plaza te encontrarás muy cerca de la capilla de San Miguel, que se encuentra cerrada por 
          cuestiones de seguridad, sin embargo, a la plaza puedes llegar fácilmente en coche y disfrutar de una hermosa vista.
        </li>
      </ul>
    </TopicContainer>

    <TopicContainer id="gifts" title="Regalos">
      <p>Querida familia y amigos,</p>
      <p> Ya hemos encontrado la riqueza más grande en el amor que nos profesamos y en el que ustedes nos brindan.</p>
      <p> Nos sentimos honrados de que hayan viajado para venir a celebrar nuestro día especial. 
      No queremos que se sientan obligados a darnos un regalo, su presencia es el mejor regalo.</p>
      <p>Sin embargo, si desean hacerlo y contribuir a nuestro proyecto de vida, les pedimos sea por medio de 
      nuestras mesas de sugerencias que hemos colocado en:
      </p>
      <p>
      SEARS   <b>11113379</b><br/>
      LIVERPOOL 
      </p>
      <p>Esto tomando en cuenta que así como ustedes, viajamos para la boda y nos será un tanto difícil transportar artículos grandes.</p>
      <p>¡Estamos eternamente agradecidos!</p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
