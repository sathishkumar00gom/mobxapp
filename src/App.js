import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";





const Counter = observer(props => (
  <section>
    
      {props.appstate.count}
      <div>
        <Button className="btn-primary" onClick={props.appstate.incCount}>
          Increment
        </Button>
        <Button className="btn-danger" onClick={props.appstate.decCount}>
          Decrement
        </Button>

        <div>  Count By Four{props.appstate.countByFour}
         
        </div>
        <div>{props.appstate.countByEight}
       
        </div>
      </div>
    
  </section>
  
));

export default Counter;
