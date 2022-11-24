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
    const [connection, setConnection] = useState(false);

    //User Profile Menu
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

    //Connect Wallet Menu
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => { (!connection ? setIsOpen(!isOpen) : setIsUserProfileOpen(!isUserProfileOpen)); }; 

  return(
      <>
          <Header_Top connection={connection} setConnection={setConnection}
              toggleWalletConnection={toggling} setIsUserProfileOpen={setIsUserProfileOpen} setIsOpen={setIsOpen}
              isOpen={isOpen} isUserProfileOpen={isUserProfileOpen} /> 
        <Routes>  
                <Route exact path="/" element={<Home />} />
              <Route exact path="/Staking" element={<Staking connection={connection} toggleWalletConnection={toggling}/>} />
                <Route exact path="/AboutUs" element={<AboutUs/>} />
        </Routes>
    </>
    );
}

function Header_Top(props) {
    const [user, setUser] = useState("");
    const [balance, setBalance] = useState(0);
    
    function checkConnectedWallet() {
        const userData = JSON.parse(localStorage.getItem('userAccount'));
        if (userData != null) {
            setUser(userData.account);
            setBalance(userData.balance);
            props.setConnection(true);
        }else{
            props.setConnection(false);
        }
    }
    useEffect(() => {
        checkConnectedWallet(); 
    }, []);
  
    const onDisconnect = () => {
        window.localStorage.removeItem('userAccount');
        props.setConnection(false);
        checkConnectedWallet();
    };

    //Mobile Menu
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const togglingMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    }; 

    const AccountDisplay = user.slice(0, 7) + "...." + user.slice(-4);

    return(
      <>
          
          {props.isOpen && (
                <WalletDialog toggling={props.toggleWalletConnection } checkConnectedWallet={checkConnectedWallet}/>
            )}  

            {isMobileOpen && (
                <MobileMenu toggling={togglingMobile} connection={props.connection}
                    setConnection={props.setConnection} accountDisplay={AccountDisplay} balance={balance}
                    onDisconnect={onDisconnect}
                    togglingConnection={props.toggleWalletConnection} />
             )}

            {props.isUserProfileOpen && (
                <UserProfile onDisconnect={onDisconnect} account={user} balance={balance}
                    toggle={props.setIsUserProfileOpen} />
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
              {props.connection && (
                        <button onClick={props.toggleWalletConnection}>{AccountDisplay}</button>   
                )}
                {!props.connection && (
                        <button onClick={props.toggleWalletConnection}>Connect Wallet</button>   
                )}
              </div>
            </header>
        </>
    );
}
export default App;
