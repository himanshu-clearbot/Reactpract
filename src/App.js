// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/textform';
import Makealerts from './component/Makealerts';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Route,Routes,Link } from 'react-router-dom';
import Aboutus from './component/Aboutus';
import {BrowserRouter} from "react-router-dom"


function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Textform heading="Type Here" />
          </div>
        </div>
      </div>
    </div>
  );
}
// let name = " himanshu"
function App() {
  const [mode,setmode]= useState('dark');
  const [colormode,colorsetmode]= useState('light');
  const [alert ,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
    setAlert(
      {
        message:message,
        type:type
      })
      setTimeout(()=>
      {
        setAlert(null);
      },2000);
  }

  const togglemodes = () =>
  {
    if(mode==='light')
    {
      setmode('dark');
      colorsetmode('light')
      showAlert("success","Darkmode")
      document.title = 'Text - DarkMode';
      }
    else
    {
      setmode('light');
      colorsetmode('black')
      showAlert("success","Lightmode")
      document.title = 'Text - LightMode';
    }
  }
  return (
    <>
    <BrowserRouter>
    {/* <Router> */}
    <Navbar title="Clear" aboutText="About us" modes={mode} togglemode={togglemodes} modecolor={colormode}/>
      <Makealerts alert={alert}/>
      <div style={{ marginTop: '30px' }} /> 
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <div style={{marginTop: '30px'}}/>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Textform heading="Type Here"/>
          </div>
        </div> 
      </div> */}
      {/* <Route path='/'element={<Navbar title="Himanshu" aboutText="About us" modes={mode} togglemode={togglemodes} modecolor={colormode}/>}/>
      <Route path='/'element={<Makealerts alert={alert}/>}/>
      <Route path='/' element={<div style={{marginTop: '30px'}}/>}/> */}
      <Route exact path='/Aboutus'element={<Aboutus/>}/>
      </Routes>
  {/* <div><Textform/></div> */}
  {/* <Route path="/"> */}

      {/* </Route> */}
      {/* </Router> */}
      </BrowserRouter>
  </>
  );
}

export default App;
