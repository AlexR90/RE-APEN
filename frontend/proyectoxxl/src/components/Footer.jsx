import React, { Fragment } from 'react'
import '../estilos/Footer.css'
import facebook from '../estilos/facebook.svg'
import twetter from '../estilos/gorjeo.svg'
import youtube from '../estilos/youtube.svg'

const Footer = () => {

    return(
        <Fragment>
          <div className="foter">
              <div className="parrafof"><p>Copyright © 2020-2021 RE-APEN GT   Todos los derechos reservados.</p></div>
              <div className="redes">
                  <img src={facebook} alt=""/>
                  <img src={twetter} alt=""/>
                  <img src={youtube} alt=""/>
              </div>
          </div> 
        </Fragment>
    )
} 
export default Footer