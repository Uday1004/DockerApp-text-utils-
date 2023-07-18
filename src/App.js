import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts';
import Uuuu from './components/Uuuu'
 

 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Mobile from './components/Mobile';


function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
  }

  // this content is added by me (from self knowledge), 
  // in this i add the dark mode in full display except text area and inner about us 

  // const [Style ,setStyle]=useState({
  //   color:'Black',
  //   backgroundColor:'White'
  // })
  // const[text,setText]=useState('Dark Mode!');

  // const Black =()=>{
  //   if(Style.color=='Black'){
  //     setStyle({
  //       color:'White',
  //       backgroundColor:'Black'
  //     })
  //     setText("Light Mode!");

  //   }
  //   else{
  //     setStyle({
  //       color:'Black',
  //       backgroundColor:'White'
  //     })
  //     setText("Dark Mode!");

  //   }

  // }

  const [mode, setmode] = useState('light'); //whether the dark mode is available or not
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black' //this line is used to set the all body color 
      showAlert('Success', 'Dark mode is Enabled!')
      document.title = 'TextUtils-Dark Mode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white' //this line is used to set the all body color 
      document.title = 'TextUlits-Home'
    }
  }
  return (
    <Router>
      <>
        <div className='big-container' /*style={Style}*/>
          <Navbar title='textUtils' about='About' contact='Contact' mode={mode} togglemode={togglemode}></Navbar>

          {/* <div className='text-right'>
       <button onClick={Black} type='button' className='btn btn-primary btn-sm float-end my-2 mx-2 '>Dark Mode!</button>
      </div> */}

          <Alerts alert={alert} />
          <TextForm title={'text Area'} mode={mode}/>
          {/* <About/> */}
          <Routes>
            
            <Route  exact path="/about" element={<About/>}>
              {/* <TextForm showAlert={showAlert} title='Text Area' mode={mode}/> */}
            </Route>
            <Route path='/Contact' element={<Mobile/>}>

            </Route>
            
          </Routes>
          
        </div>
        <Uuuu/>
      </>

      
    </Router>

  )
}


















export default App;


