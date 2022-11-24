import React from 'react';
import './styles/WalletDialog.css';
/*import { Web3ReactProvider } from '@web3-react/core';*/
import Web3 from 'web3'

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
export default function WalletDialog(props) {
    return (
        <>
        <div className="WalletDialogBackground">
        </div>
            <div className="WalletDialog" onClick={props.toggling}>
          <div className="MainDialog">
              <div className="Close">
                  <img src="./static/images/ConnectWallet/close.png" onClick={props.toggling} alt="Close"/>
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
                              <img src="./static/images/ConnectWallet/Binance.png" onClick={props.toggling} alt="Binance"/>
                          </div>
                          <div className="OptionText">Binance</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Metamask.png" onClick={() => {connectToMetamask(props.checkConnectedWallet); props.toggling();}} alt="Metamask"/>
                          </div>
                          <div className="OptionText">Metamask</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Coinbase.png" onClick={props.toggling} alt="Coinbase"/>
                          </div>
                          <div className="OptionText">Coinbase Wallet</div>
                      </div>
                  </div>
                  <div className="MainDialogOptionsRow">
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Trust.png" onClick={props.toggling} alt="Trust"/>
                          </div>
                          <div className="OptionText">Trust Wallet</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/WalletConnect.png" onClick={props.toggling} alt="WalletConnect"/>
                          </div>
                          <div className="OptionText">WalletConnect</div>
                      </div>
                      <div className="MainDialogOptionContainer">
                          <div className="OptionImage">
                              <img src="./static/images/ConnectWallet/Additional.png" onClick={props.toggling} alt="Additional"/>
                          </div>
                          <div className="OptionText">Additional</div>
                      </div>
                  </div>
              </div>
          </div>
       </div>
       </>
    );
}