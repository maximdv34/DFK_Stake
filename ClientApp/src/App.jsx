import React, { useState, useEffect, useReducer} from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';
import WalletDialog from './walletDialog';
//import MainSign from './MainSign.jsx';
/*
const forceUpdateReducer = (i) => i + 1

export const useForceUpdate = () => {
  const [, forceUpdate] = useReducer(forceUpdateReducer, 0)
  return forceUpdate
}
*/
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

export function showDialog(toggle) {
    if (toggle) {
      document.body.style.position = 'fixed';
    }
    else {
      document.body.style.position = 'initial';
    }
}

function Header_Top() {
  const [user, setUser] = useState("Connect Wallet");
  const [connection, setConnection] = useState(false);
  function checkConnectedWallet() {
    const userData = JSON.parse(localStorage.getItem('userAccount'));
    if (userData != null) {
      setUser(userData.account);
      setConnection(true);
    }else{
      setConnection(false);
      setUser("Connect Wallet");
    }
  }
  useEffect(() => {
    checkConnectedWallet(); 
  }, []);
  
  const onDisconnect = () => {
    window.localStorage.removeItem('userAccount');
    setConnection(false);
    checkConnectedWallet();
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => {(!connection ? setIsOpen(!isOpen) && showDialog(!isOpen): setIsOpen(isOpen)/*open menu*/);}; 
  return(
      <>
          
          {isOpen && (
              <WalletDialog toggling={toggling } checkConnectedWallet={checkConnectedWallet}/>
          ) }  
          <header>
              <div className="SiteMainHeadercontainer">
                  <Link to={'/'} className="SiteMainName">DFK Stake</Link>
                  <Link to={'/'}><img src='./static/images/logo.png' /></Link>
              </div>
              <div className="Navigation">
                  <Link to={'Staking'}><div>Staking</div></Link>
                  <Link to={'AboutUs'}><div>About Us</div></Link>
              </div>
              {/*
              <div className="LanguageButton" onClick={toggleLanguageMenu}>
                  <img src="./static/images/languageButton.png" />
              </div>
              */}
              <div className="ConnectWalletButton">
                  <button onClick={toggling}>{user}</button>
                  {connection && (
                    <button onClick={onDisconnect}>disconnect</button>
                  ) }       
              </div>
            </header>
        </>
    );
}
export default App;
