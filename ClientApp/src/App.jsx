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
          <header>
              <div>
                  <Link to={'/'} className="ImageContainer"><div className="MainName">DFK Stake</div></Link>
                  <Link to={'/'}><img src='./static/images/logo.png' /></Link>
              </div>
              <div className="Navigation">
                  <Link to={'Staking'}><div>Staking</div></Link>
                  <Link to={'AboutUs'}><div>About Us</div></Link>
              </div>
              <div className="ConnectWalletButton">
                  <button>Connect Wallet</button>       
              </div>
            </header>
        </>
    );
}
export default App;
