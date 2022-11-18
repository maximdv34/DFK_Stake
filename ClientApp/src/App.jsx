import React, { useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';

//import MainSign from './MainSign.jsx';
import './styles/WalletDialog.css';
import './styles/MobileMenu.css';

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


let toggle = true;
let _Y = 0;

export function showConnectWalletDialog() {
    const walletDialog = document.getElementById("wall");
    let Y = window.scrollY;

    if (toggle) {
        _Y = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    else {
        document.body.style.position = 'initial';
        Y = _Y;
    }
    walletDialog.classList.toggle("WalletDialogOpen");
    toggle = !toggle;

    window.scrollTo(0, Y);
}

export function showMobileMenu() {
    const mobileMenu = document.getElementById("mobilemenu");
    let Y = window.scrollY;

    if (toggle) {
        _Y = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    else {
        document.body.style.position = 'initial';
        Y = _Y;
    }
    mobileMenu.classList.toggle("MobileMenuOpen");
    toggle = !toggle;

    window.scrollTo(0, Y);
}

function WalletDialog() {
    return (
            <div className="WalletDialog" id="wall">
                <div className="MainDialog">
                    <div className="Close">
                        <img src="./static/images/ConnectWallet/close.png" onClick={showConnectWalletDialog} />
                    </div>
                    <div className="MainDialogText">
                        <div className="MainDialogMainSign">Connect Wallet</div>
                        <div>
                            Start by connecting with one of the wallets below. Be sure to store your private keys
                            or seed phrase securely. Never share them with anyone.
                        </div>
                    </div>
                    <div className="MainDialogOptions">
                        <div className="MainDialogOptionsRow">
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/Binance.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">Binance</div>
                            </div>
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/Metamask.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">Metamask</div>
                            </div>
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/Coinbase.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">Coinbase Wallet</div>
                            </div>
                        </div>
                        <div className="MainDialogOptionsRow">
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/Trust.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">Trust Wallet</div>
                            </div>
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/WalletConnect.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">WalletConnect</div>
                            </div>
                            <div className="MainDialogOptionContainer">
                                <div className="OptionImage">
                                    <img src="./static/images/ConnectWallet/Additional.png" onClick={showConnectWalletDialog} />
                                </div>
                                <div className="OptionText">Additional</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

function MobileMenu() {
    return (
        <div className="MobileMenuBackground" id="mobilemenu">
            <div className="MobileMenu">
                <div className="MobileHomeMain">
                    DFK Stake
                    <img src='./static/images/logo.png' />
                </div> 
                <div className="MobileMenuWalletInfo">
                    <button className="MobileMenuButton" onClick={showMobileMenu}>ConnectWallet</button>
                </div>
                <Link to={'/'}><button className="MobileMenuButton" onClick={showMobileMenu}>Home</button></Link>
                <Link to={'Staking'}><button className="MobileMenuButton" onClick={showMobileMenu}>Staking</button></Link>
                <Link to={'AboutUs'}><button className="MobileMenuButton" onClick={showMobileMenu}>About Us</button></Link>
            </div>
            <div className="MobileMenuPlaceHolder" onClick={showMobileMenu}></div>
        </div>
        );
}

function Header_Top() {
    const toggleLanguageMenu = () => {
        const languageSelect = document.getElementById("language");
        languageSelect.classList.toggle("DisplayLanguageMenu");
    };

    const selectLanguage = (e) => {
        
        toggleLanguageMenu();
    };

    const [copiedToClipboard, setCopiedToClipboard] = useState(false);
    const upwp = "0x0e7dbcEEEde7573D28ec8ec8ce2e3e8366355ce";   //user profile wallet placeholder
    const upwpd = upwp.slice(0, 7) + "...." + upwp.slice(-4); //user profile wallet for display in profile
    const balance = 12345;                                      //user wallet balance

    //Copy wallet id to clipboard
    const copyWalletIdToClipboard = async () => {
        await navigator.clipboard.writeText(upwp);
        setCopiedToClipboard(true);
        setTimeout(setCopiedToClipboard, 3000, false);
    };

    return (
      <>
          <WalletDialog />
          <MobileMenu />

          <div id="language" className="LanguageMenu">
              <div className="LanguageMenuRow" onClick={selectLanguage}>
                  <div className="LanguageMenuFlagContainer"><img src="./static/images/Languages/English.png" /></div>
                  <div className="LanguageMenuSignContainer">English</div>
              </div>
              <div className="LanguageMenuRow" onClick={selectLanguage}>
                  <div className="LanguageMenuFlagContainer"><img src="./static/images/Languages/Ukraine.png" /></div>
                  <div className="LanguageMenuSignContainer">Ukrainian</div>
              </div>
          </div>

            {/*<div className="UserProfile">
            <div className="UserProfileLogo">
                    <div className="UserProfileLogoName">
                        DFK Stake
                    </div>
                    <div className="UserProfileLogoImage">
                        <img src="./static/images/logo.png" />
                    </div>
                </div>
                <div className="UserProfileDataContainer">
                    <img src="./static/images/UserImages/WalletImage.png" />
                    <div onClick={copyWalletIdToClipboard }>
                        {upwpd}
                    </div>
                </div>

                {copiedToClipboard ? (
                    <div className="UserProfileCopiedToClipboard">
                        Copied to clipboard
                   </div>) :
                    (<></>)
                }

                <div className="UserProfileDataContainer">
                    <img src="./static/images/UserImages/CashImage.png" />
                    <div>
                        {balance}$
                    </div>
                </div>
                <div className="UserProfileDisconnectButton">
                    <button>Disconnect</button>
                </div>
          </div>*/}

          <header>
              <div className="SiteMainHeadercontainer">
                  <Link to={'/'} className="SiteMainName">DFK Stake</Link>
                  <Link to={'/'}><img src='./static/images/logo.png' /></Link>
              </div>
              <div className="Navigation">
                  <Link to={'Staking'}><div>Staking</div></Link>
                  <Link to={'AboutUs'}><div>About Us</div></Link>
              </div>
              <div className="LanguageButton" onClick={toggleLanguageMenu}>
                  <img src="./static/images/languageButton.png" />
              </div>
              <div className="ConnectWalletButton">
                  <button onClick={showConnectWalletDialog}>Connect Wallet</button>       
              </div>
              <div className="MobileButton">
                  <img src="./static/images/mobileMenuButton.png" onClick={showMobileMenu} />
              </div>
            </header>
        </>
    );
}
export default App;
