import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';

import './styles/WalletDialog.css';

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

function showConnectWalletDialog() {
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

function Header_Top() {
  return(
      <>
          <WalletDialog/>
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
                  <button onClick={showConnectWalletDialog}>Connect Wallet</button>       
              </div>
            </header>
        </>
    );
}
export default App;
