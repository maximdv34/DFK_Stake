import React from 'react';
import './styles/MobileMenu.css';
import { Link } from "react-router-dom";
import "./styles/MainSign.css";
import "./styles/UserProfile.css";

export default function MobileMenu(props) {
    return (
        <div className="MobileMenuBackground" id="mobilemenu">
            <div className="MobileMenu">
                <div className="HomeMainMobile">
                    DFK Stake
                    <img src='./static/images/logo.png' alt="Logo" />
                </div>  
                <div className="MobileMenuWalletInfo">

                    {!props.connection ?
                        (
                            <button className="MobileMenuButton" onClick={props.toggling}>ConnectWallet</button>) 
                        :
                        (
                            <>
                            <div className="UserProfileDataContainer">
                                <img src="./static/images/UserImages/WalletImage.png" alt="Wallet" />
                                <div>
                                    {props.accountDisplay}
                                </div>
                            </div>
                            <div className="UserProfileDataContainer">
                                <img src="./static/images/UserImages/CashImage.png" alt="Cash" />
                                <div>
                                    {props.balance}$
                                </div>
                            </div>
                            </>)
                        }
                    


                </div>
                <Link to={'/'}><button className="MobileMenuButton" onClick={props.toggling}>Home</button></Link>
                <Link to={'Staking'}><button className="MobileMenuButton" onClick={props.toggling}>Staking</button></Link>
                <Link to={'AboutUs'}><button className="MobileMenuButton" onClick={props.toggling}>About Us</button></Link>

                {props.connection ? (
                    <button className="MobileMenuButton DisconnectMobileButton" onClick={props.onDisconnect }>Disconnect</button>
                    )
                    :
                    (
                        <></>)}

            </div>
            <div className="MobileMenuPlaceHolder" onClick={props.toggling}></div>
        </div>
    );
}