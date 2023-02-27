import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";

function App() {
  const[mode, setmode] = useState('light');

  const[alert, setalert] = useState(null);

  const[btntext, setbtntext] = useState('Enable dark mode')

  const showalert = (message, type)=>{
      setalert({
        msg: message,
        type: type

      })

      setTimeout(() =>{
        setalert('null');
      }, 2000)
  }

  function togglemode(){
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(5 20 70)';
      showalert("Dark mode is Enable", 'success ')
      setbtntext('Enable Light mode')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert('Light mode is Enable', 'success')
      setbtntext('Enable Dark mode')
    }
  }

  return (
    
    <div className="App">
      <Navbar title = 'Text Converter' about = 'About' mode= {mode} togglemode = {togglemode} btntext= {btntext}/>
      
      <Alert alert={alert}/>

      
        <div className="my-3">
       
      <Routes> 
          <Route path="" element={<Textfrom heading= 'Enter Text Below' mode= {mode} showalert = {showalert}/>}></Route> 
          <Route path="/about" element={<About/>}></Route> 
       </Routes>    
    </div>
    </div>
   
  );
}

export default App;
