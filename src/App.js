// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/textform';
import Makealerts from './component/Makealerts';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
    {/* <Router> */}
  <Navbar title="Himanshu" aboutText="About us" modes={mode} togglemode={togglemodes} modecolor={colormode}/>
  <Makealerts alert={alert}/>
  <div style={{marginTop: '30px'}}/>
  {/* <div><Textform/></div> */}
  {/* <Route path="/"> */}
  <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Textform heading="Type Here"/>
          </div>
        </div> 
      </div>
      {/* </Route> */}
      {/* </Router> */}
  </>
  );
}

export default App;
