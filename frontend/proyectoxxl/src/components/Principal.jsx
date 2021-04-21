import React, { Fragment} from 'react';
import Libro from './Libros';
import Navbar from './Navbar';
import   '../estilos/principal.css';

import Footer from './Footer';

const Principal = () => {
 

  return (
   
   <Fragment>
     <Navbar/>
     <div className="Slogan">
       Un entorno para aprender y enseñar
     </div>
    
     <Libro/>
      <h3 className="tituloingenieria"><a >Ingenieria</a> </h3>
      <h3 className="titulosemestre"><a >Semestres</a> </h3>
      <div className="contenedorsemst">
        <div className="semestre">1 <a >er</a></div>
        <div className="semestre">2 <a >do</a></div>
        <div className="semestre">3 <a >ro</a></div>
        <div className="semestre">4 <a >to</a></div>
        <div className="semestre">5 <a >to</a></div>
        <div className="semestre">6 <a >to</a></div>
        <div className="semestre">7 <a >mo</a></div>
        <div className="semestre">8 <a >vo</a></div>
        <div className="semestre">9 <a >no</a></div>
        <div className="semestre">10 <a >mo</a></div>
      </div>
     <Footer/>
   </Fragment>
   
  );
}
 export default Principal;