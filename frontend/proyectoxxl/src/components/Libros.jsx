import React, { Fragment } from 'react';
import '../estilos/libros.css';


const libros =[
    {"title":"Python para todos",
     "linkimg":"https://lh5.googleusercontent.com/k94HzpfQKPoQYqAswqJ998hyuIJtSmCAXi-I6D04B27029kzQnsVobL-gHr1t6xZVqCAbNA0hibqTsinJhQj=w1920-h832-rw",
     "url":"https://drive.google.com/file/d/176izuUV5ddFgpOPL6-Q-2gNDF69LAEBG/view?usp=sharing",
     "resumen":"Aprende a desarroyar en Python", 
     "estilo":"card"
    },
    {"title":"El teorema del loro",
    "linkimg":"https://static.docsity.com/wordpress/3/2019/04/teorema-loro-2.jpg",
    "url":"http://www.librosmaravillosos.com/elteoremadelloro/pdf/elteoremadelloro%20-%20Denis%20Guedj.pdf",
    "resumen":"Las matemáticas reales se entrecruzan en una secuencia histórica como una serie de problemas de intriga, y arrastran con ellos sus propias narraciones.", 
    "estilo":"card"
    },
    {"title":"Ingenieros de la victoria",
    "linkimg":"https://static.docsity.com/wordpress/3/2019/04/51ZFtXWGnnL._SY445_.jpg",
    "url":"https://sites.google.com/site/oratverihard4/9788499921259-70viacerGEtifab28",
    "resumen":" relato fascinante sobre la estrategia secreta que llevó a los Aliados a la victoria" ,
    "estilo":"card1"
    },
    {"title":"La psicologia de los objetos cotidianos",
    "linkimg":"https://static.docsity.com/wordpress/3/2019/04/descarga-60.jpg",
    "url":"https://www.loop.la/descargas/disenho/Psicologia_objetos_cotidianos%20-%20Donald%20Norman.pdf",
    "resumen":"acerca de cómo el diseño sirve de comunicación entre el objeto y el usuario", 
    "estilo":"card1"
    }
]

const Libro = () => {

    return(
         <Fragment>
              <h3 className="titulo"><a className="tituloa">Libros que debes leer</a></h3>
             <div className="container">
                 {
                     libros.map((item,index)=>{
                         return(
                        <div className={item.estilo} href={item.url} key={index}>
                            <div className="containerimg">
                            <img src={item.linkimg} className="img"/>
                            </div>
                            <h4 className="tituloh4">{item.title}</h4>
                            <p className="parrafo">{item.resumen}</p>
                        </div>
                         )
                     })
                 }
             </div>
         </Fragment>   
    );
}
export default Libro;