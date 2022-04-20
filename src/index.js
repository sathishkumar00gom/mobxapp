import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './App';
import {observable,configure,action} from "mobx"
configure({enforceActions:true});



const appstate=observable({
  count:0,
  incCount: action("increment Counter",()=>{
    appstate.count +=1;
  }),
  decCount: action("decrement Counter",()=>{
    appstate.count -=1;
  }),
  get countByFour(){
    return this.count*4
  },
  get countByEight(){
    return this.count*8
  }
  
})




 ReactDOM.render(
  <React.StrictMode>
    <Counter appstate={appstate} />
  </React.StrictMode>,
  document.getElementById('root')
);


