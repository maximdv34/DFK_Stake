import React, { useState, useEffect} from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';
import WalletDialog from './walletDialog';
import MobileMenu from './mobileMenu';
import UserProfile from './userProfile';
import LanguageMenu from './languageMenu';

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
    const [user, setUser] = useState("");
    const [balance, setBalance] = useState(0);
    const [connection, setConnection] = useState(false);
    function checkConnectedWallet() {
        const userData = JSON.parse(localStorage.getItem('userAccount'));
        if (userData != null) {
            setUser(userData.account);
            setBalance(userData.balance);
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

    //Connect Wallet Menu
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => { (!connection ? setIsOpen(!isOpen) && showDialog(!isOpen) : setIsUserProfileOpen(!isUserProfileOpen)); }; 

    //Mobile Menu
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const togglingMobile = () => {
        (!connection ? setIsMobileOpen(!isMobileOpen) &&
            showDialog(!isMobileOpen) : setIsMobileOpen(isMobileOpen)/*open menu*/);
    }; 

    //User Profile Menu
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    
    return(
      <>
          
          {isOpen && (
              <WalletDialog toggling={toggling } checkConnectedWallet={checkConnectedWallet}/>
            )}  

          {isMobileOpen && (
               <MobileMenu toggling={togglingMobile }/>
             )}

            {isUserProfileOpen && (
                <UserProfile onDisconnect={onDisconnect} account={user} balance={balance} disconnect={setIsUserProfileOpen} />
              )}


          <header>
              <div className="SiteMainHeadercontainer">
                  <Link to={'/'} className="SiteMainName">DFK Stake</Link>
                  <Link to={'/'}><img src='./static/images/logo.png' alt="Home"/></Link>
              </div>
              <div className="Navigation">
                  <Link to={'Staking'}><div>Staking</div></Link>
                  <Link to={'AboutUs'}><div>About Us</div></Link>
              </div>
              
                <LanguageMenu />

              <div className="MobileButton">
                  <img src="./static/images/mobileMenuButton.png" onClick={togglingMobile} alt="Menu"/>
              </div>
              <div className="ConnectWalletButton">
                    <button onClick={toggling}>{user.slice(0, 7) + "...." + user.slice(-4)}</button>      
              </div>
            </header>
        </>
    );
}
export default App;
