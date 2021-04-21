import React, { useState } from 'react';
import '../estilos/Contacto.css';
import Navbar from './Navbar';

const api_flask = process.env.REACT_APP_API


const Contacto = () =>{

const [nombre, setnombre] = useState('')
const [telefono, settelefono] = useState('')
const [correo, setcorreo] = useState('')
const [mensaje, setmensaje] = useState('')

const handleSubmit = async (e) =>{
     e.preventDefault()
 const res =   await  fetch(`${api_flask}/contacto`,{
                             method:'POST',
                             headers:{
                             'Content-Type':'application/json'
                           },
                             body:JSON.stringify({
                              nombre,
                              telefono,
                              correo,
                               mensaje
                               })
                            })
    const data =  await res.json()
    console.log(data)                       
   setnombre('')
   settelefono('')
   setcorreo('')
   setmensaje('')                    
}
  return(
      <div>
          <Navbar/>
      
              <form onSubmit={handleSubmit}>
                  <h2>Envianos tu comentario</h2>
                
                  <input type="text" 
                  onChange={e => setnombre(e.target.value)} 
                  placeholder="Nombre"
                  value={nombre}
                  autoFocus
                  required
                  />
                
                  <input type="number"
                   onChange={e => settelefono(e.target.value)} 
                   value={telefono}
                   placeholder="Telefono"
                   required
                   />
                  
                 
                  <input type="email"
                   onChange={e => setcorreo(e.target.value)} 
                   value={correo}
                  placeholder="Correo"
                  required
                  />
                 
                  <textarea placeholder="Escribe aqui tu mensaje" 
                   onChange={e => setmensaje(e.target.value)} 
                   value={mensaje}
                   required
                  ></textarea>
             
                  <button   className="btn" >ENVIAR</button>
              </form>

       
      </div>
  )
}
  export default Contacto;