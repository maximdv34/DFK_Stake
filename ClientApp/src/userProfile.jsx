import './styles/UserProfile.css';
import React, { useState} from 'react';

export default function UserProfile(props) {
    //props.onDisconnect;
    //props.balance
    //props.account

    const accountDisplay = props.account.slice(0, 7) + "...." + props.account.slice(-4);
    //const upwp = "0x0e7dbcEEEde7573D28ec8ec8ce2e3e8366355ce";   //user profile wallet placeholder
    //const upwpd = upwp.slice(0, 7) + "...." + upwp.slice(-4); //user profile wallet for display in profile
    //const balance = 12345;                                      //user wallet balance

    const [copiedToClipboard, setCopiedToClipboard] = useState(false);
    //Copy wallet id to clipboard
    const copyWalletIdToClipboard = async () => {
        await navigator.clipboard.writeText(props.account);
        setCopiedToClipboard(true);
        setTimeout(setCopiedToClipboard, 3000, false);
    };

    return (
        <div className="UserProfile">
            <div className="UserProfileLogo">
                <div className="UserProfileLogoName">
                    DFK Stake
                </div>
                <div className="UserProfileLogoImage">
                    <img src="./static/images/logo.png" alt="Logo"/>
                </div>
            </div>
            <div className="UserProfileDataContainer">
                  <img src="./static/images/UserImages/WalletImage.png" alt="Wallet"/>
                  <div onClick={copyWalletIdToClipboard }>
                        {accountDisplay}
                  </div>
                  </div>
                    {copiedToClipboard ? (
                  <div className="UserProfileCopiedToClipboard">
                    Copied to clipboard
                  </div>) :
                    (<></>)
                        } 

            <div className="UserProfileDataContainer">
                <div>
                 {props.balance}$
                </div>
            </div>
            <div className="UserProfileDisconnectButton">
                <button onClick={() => { props.onDisconnect(); props.disconnect(false); } }>Disconnect</button>
            </div>
            <div className="UserProfileCloseButton">
                <button onClick={() => { props.toggle(false); }}>Close</button>
            </div>
        </div>
        );
}