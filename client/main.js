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
                { label: 'DIRECTORIO', href: 'directorio' },
                { label: 'QUE HACER', href: 'thingstodo' },
                { label: 'REGALOS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="wedding" title="La Boda">
      <div className="container">
        <div className="one-half column">
          <h2>CEREMONIA</h2>
          <p>19:00 hrs, en la Parroquia de Santa Maria de la Asuncion Acapetlahuacan (Ex convento de San Francisco).</p>
          <p>Circunvalación Tláloc #4 Col. Ricardo Treviño</p>
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

      <h2>EL DÍA DE LA BODA</h2>
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

      <h2>CÓMO LLEGAR A ATLIXCO</h2>
      <p>Se ubica a 25 km de la ciudad de Puebla, capital del Estado y cuenta con dos importantes vías de acceso: la Carretera Federal 190 y 
      la moderna Autopista Vía Atlixcáyotl ($40, te ahorraras como 15-20 minutos).
      </p>
      <p>No hay autobuses directos, tienes que llegar a la CAPU o alguna otra terminal de ORO/ERCO (<a href="https://goo.gl/maps/aSEKkc6bA3x">Col. La Paz</a> 
      | <a href="https://goo.gl/maps/xkTEBrfTJwH2">Caseta Atlixcayotl</a>), el costo de es aprox. $35 por persona, el tiempo de traslado es de casi 
      una hora  de terminal a terminal desde la CAPU. (En Atlixco la terminal esta a 600 metros del zocalo).
      </p>
     
      <h2>HOSPEDAJE</h2>
      <p>
      Contamos con convenio con el hotel <b>City Express Atlixco</b> <a href="https://goo.gl/maps/GS43Lq3Gws82">Ubicación</a>, 
      a 15 minutos del centro de atlixco y de la iglesia, y a 7 minutos del jardín. La habitación incluye desayuno buffet. Los precios van 
      de $ 1,264 a $1,496.
      </p>
      <br/>
      Para obtener esta tarifa la reservación se debe hacer vía telefónica, haciendo mención a que reservan para la boda de Aurora y Rafael,
      con los datos que encontraran a continuación
      <br/>
      Telefono: <a href="tel:0447711284064">044 771 128 4064</a><br/>
            Deposito a: BV Atlixco Express SA de CV<br/>
            Banco: Santander<br />
            Num de cuenta: <b>65-50660492-5</b><br/>
            CLABE: <b>014654655066049258</b><br/>
      Enviar comprobante a: Adela León al celular anterior a y mencionar a nombre de quien queda la reservación.
      
    </TopicContainer>

    <TopicContainer id="directorio" title="Directorio">
      <h2>Hoteles</h2>
      <p><b>City Express Atlixco</b></p>
      Carr. Fed. Puebla-Atlixco Km 27.5 Centro Atlixco, Pue.<br/>
        <a href="tel:012444469200">01 244 446 9200</a><br />
        Contacto: <b>Adela León</b>
      <br /><br />
      <h2>Maquillistas y peinadoras</h2>
      <p><b>Fernanda Espinoza</b> (A domicilio)<br /></p>
        <a href="tel:5510535988">551 053 5988</a><br />
        En Facebook:  <a href="https://www.facebook.com/fernanda.espinozarivera">Fernanda Espinoza</a>
      
      <p><b>Jamileth Vázquez</b> (A domicilio)<br /></p>
        <a href="tel:2221352113">222 135 2113</a><br />
        En Facebook:  <a href="https://www.facebook.com/NAIABEAUTYSTUDIO/">NAIA</a>
      <br /><br />

      <h2>Peluquería</h2>
      <p>Peluquería y barbería <b>Paris</b><br /></p>
      Calle 2 Ote. 3, Centro, 74200 Atlixco, Pue. (Frente al parque)<br/>
      Lunes a Sábado: 10:00 – 19:30
      <a href="https://goo.gl/maps/JVRwHzkptdp">Ubicación</a>
      <br /><br />
      
      <h2>Tintorería</h2>
      <p><b>Quick & Clean</b><br /></p>
        Av Hidalgo, Centro, 74200 Atlixco, Pue.<br />
        <a href="https://goo.gl/maps/NGcNidKZdXC2">Ubicación</a>
      <br /><br/>
      
      <h2>Uñas</h2>
      <p><b>Fer Medina</b> (A domicilio)<br /></p>
        <a href="tel:2227313731">222 731 3731</a><br />
      <br /><br />

      <h2>Niñera</h2>
      <p><b>Estefanía Bustos Díaz</b><br /></p>
        <a href="tel:5540177147">554 017 7147</a><br />
        En Facebook:  <a href="https://www.facebook.com/estefania.bustosdiaz">Estefania Bustos Díaz</a>
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
      LIVERPOOL <b>45531408</b>
      </p>
      <p>Esto tomando en cuenta que así como ustedes, viajamos para la boda y nos será un tanto difícil transportar artículos grandes.</p>
      <p>¡Estamos eternamente agradecidos!</p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
