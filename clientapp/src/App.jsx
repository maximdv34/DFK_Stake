import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return(
    <>
    <Header_Top/> 
      <Routes>  
        {/*<Route exact path="/" element={<Home/>} />*/}
          
      </Routes>
    <Footer/>
    </>
      );
}

export default App;
