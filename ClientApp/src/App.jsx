import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';

function App() {
  return(
    <>
    <Header_Top/> 
      <Routes>  
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Staking" element={<Staking/>} />
        <Route exact path="/AboutUs" element={<AboutUs/>} />
      </Routes>
    </>
    );
}
function Header_Top() {
  return(
    <>
    <div>
      <div>DFK Stake</div>
      <div><img src='./static/images/logo.png'/></div>
      <div>
        <Link to={'Staking'}><div>Staking</div></Link>
        <Link to={'AboutUs'}><div>About Us</div></Link>
      </div>`
    </div>
    </>
    );
}
export default App;
