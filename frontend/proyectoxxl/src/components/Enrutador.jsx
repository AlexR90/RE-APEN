import React from 'react'
import {BrowserRouter as Ruter, Switch, Route} from 'react-router-dom'
import Contacto from './Contacto';
import Ingenieria from './Ingenieria';
import Nosotros from './Nosotros';
import Principal from './Principal';

const Enrutador = () =>{

    return(
        <Ruter>
            <div>
                <Switch>
                    <Route path="/ingenieria" component={Ingenieria}/>
                    <Route path="/nosotros" component={Nosotros}/>
                    <Route path="/contacto" component={Contacto}/>
                    <Route path="/" component={Principal}/>
                </Switch>
            </div>
        </Ruter>
    )
}
export default Enrutador