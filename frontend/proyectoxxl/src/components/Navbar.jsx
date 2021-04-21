import React, {  useEffect, useRef, useState } from 'react';
import   '../estilos/Navbar.css';
import {Link} from 'react-router-dom'
import menu from '../estilos/menu.svg'
import cerrar from '../estilos/cerrar.svg'


const Navbar = () => {
 
  const [visible, setVisible] = useState(false);
 
 const handleClick = () =>{
   setVisible(!visible) 

  }
 
  let  menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)){
        setVisible(false)
      }
    }
     document.addEventListener("mousedown",handler)
     return () => {
       document.removeEventListener("mousedown",handler)
     }
  })

  return (
    <nav ref={menuRef} className="NavbarItems">
       <div className="menu-icon" onClick={handleClick}>
        <i className={visible ? 'fas fa-times':'fas fa-bars'}></i>
        </div>
      <h1 className="navbar-logo">RE-APEN GT</h1>
      <ul className={visible ? 'nav-menu active':'nav-menu'}>
          <li>
            <Link to="/"className="link">Principal</Link>
          </li>
          
          <li>
            <Link to="/ingenieria"className="link">Ingenieria</Link>
          </li>

          <li>
            <Link to="/nosotros" className="link">Nosotros</Link>
          </li>

          <li>
            <Link to="/contacto"className="link">Contacto</Link>
          </li>
      </ul>
       
      
    </nav>
  );
}
 export default Navbar;

