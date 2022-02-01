
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';


function App() {
  const [mode , setMode ] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type )   => {
    setAlert({
      msg:message,
      type:type
    })
    
  }

  const toggleMode = ()=>{
    
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      setAlert("dark mode has been enabled","success");
    }else{
      setMode("light"); 
      document.body.style.backgroundColor = 'white';
      setAlert("light mode has been enabled","success");
    }
   
  }

  return (
    <>  
      {/* { <Navbar /> } */}
      <Navbar title="TextUtiles" mode={mode}  toggleMode={toggleMode} />
      <Alert Alert={alert}/>
      <div className="container my-3">
        {<Textfrom heading="Enter the text to analyze below" mode={mode} />}
        {/* { <About /> } */} 
        
      </div> 
    
    </>
  );
}

export default App;
