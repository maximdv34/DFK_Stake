import React, { useState, useEffect, useReducer} from 'react';
import { Routes, Route, Link} from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3'
import Home from './Home';
import Staking from './Staking';
import AboutUs from './AboutUs';
import './styles/App.css';

import './styles/WalletDialog.css';
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

let _Y = 0;
export function showDialog(toggle) {
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
    window.scrollTo(0, Y);
}

async function connectToMetamask(checkConnectedWallet){
    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
          provider = window.ethereum;
        } else if (window.web3) {
          provider = window.web3.currentProvider;
        } else {
          console.log(
            'Non-Ethereum browser detected. You should consider trying MetaMask!'
          );
        }
        console.log("ok");
        return provider;
      };
      const saveUserInfo = (ethBalance, account, chainId) => {
        const userAccount = {
          account: account,
          balance: ethBalance,
          connectionid: chainId,
        };
        window.localStorage.setItem('userAccount', JSON.stringify(userAccount)); //user persisted data
      };  
      const onConnect = async () => {
        try {
          const currentProvider = detectCurrentProvider();
          if (currentProvider) {
            if (currentProvider !== window.ethereum) {
              console.log(
                'Non-Ethereum browser detected. You should consider trying MetaMask!'
              );
            }
            await currentProvider.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(currentProvider);
            const userAccount = await web3.eth.getAccounts();
            const chainId = await web3.eth.getChainId();
            const account = userAccount[0];
            let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
            ethBalance = web3.utils.fromWei(ethBalance, 'ether'); //Convert balance to wei
            saveUserInfo(ethBalance, account, chainId);
            if (userAccount.length === 0) {
              console.log('Please connect to meta mask');
            }
          }
        } catch (err) {
          console.log(
            'There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.'
          );
        }
      };    
    await onConnect();
    //setTimeout(checkConnectedWallet, 1000);
    checkConnectedWallet();
    //window.location.reload(true);
    /*
    const forceUpdate = useForceUpdate();
    forceUpdate();
    */

}
function WalletDialog(props) {
    return (
      <div className="WalletDialog WalletDialogOpen" id="wall">
          <div className="MainDialog">
              <div className="Close">
                  <img src="./static/images/ConnectWallet/close.png" onClick={props.toggling} />
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
                              <img src="./static/images/ConnectWallet/Binance.png" onClick={props.toggling} />
                          </div>
                          <div className="OptionText">Binance</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Metamask.png" onClick={() => {connectToMetamask(props.checkConnectedWallet); props.toggling();}} />
                          </div>
                          <div className="OptionText">Metamask</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Coinbase.png" onClick={props.toggling} />
                          </div>
                          <div className="OptionText">Coinbase Wallet</div>
                      </div>
                  </div>
                  <div className="MainDialogOptionsRow">
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Trust.png" onClick={props.toggling} />
                          </div>
                          <div className="OptionText">Trust Wallet</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/WalletConnect.png" onClick={props.toggling} />
                          </div>
                          <div className="OptionText">WalletConnect</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Additional.png" onClick={props.toggling} />
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
              <div>
                  <Link to={'/'} className="ImageContainer"><div className="MainName">DFK Stake</div></Link>
                  <Link to={'/'}><img src='./static/images/logo.png' /></Link>
              </div>
              <div className="Navigation">
                  <Link to={'Staking'}><div>Staking</div></Link>
                  <Link to={'AboutUs'}><div>About Us</div></Link>
              </div>
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
