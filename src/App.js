import { Footer, Header,Content } from './func-components';
import React from 'react';
import Context from './context-content';
import {userContext} from './context';

import logo from './logo.svg';
import Button from './class-components';
import { Calculator2 } from './calculator';
import { EventData1 } from './event-data';
import RefsArray from './refs-array';
import MessageBox from './state-func';
export default function App(){
  return (
    <userContext.Provider value={'Tom Jerry'}>
    <Context/>
    </userContext.Provider>
  )
}
//import './style.css';
//export default function App(){
//  return <RefsArray/>
//}
//export default function App(){
//  return<EventData1/>
//}
//export default function App(){
//  return<Calculator2/>
//}
//function App() {
//  return <Button/>
//    
//
//  
    
//    
//}

//export default App;
