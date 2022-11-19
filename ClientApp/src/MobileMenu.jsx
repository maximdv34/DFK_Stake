import React from 'react';
import './styles/MobileMenu.css';
import { Link } from "react-router-dom";
import MainSign from "./MainSign";

export default function MobileMenu(props) {
    return (
        <div className="MobileMenuBackground" id="mobilemenu">
            <div className="MobileMenu">
                <MainSign />
                <div className="MobileMenuWalletInfo">
                    <button className="MobileMenuButton" onClick={props.toggling}>ConnectWallet</button>
                </div>
                <Link to={'/'}><button className="MobileMenuButton" onClick={props.toggling}>Home</button></Link>
                <Link to={'Staking'}><button className="MobileMenuButton" onClick={props.toggling}>Staking</button></Link>
                <Link to={'AboutUs'}><button className="MobileMenuButton" onClick={props.toggling}>About Us</button></Link>
            </div>
            <div className="MobileMenuPlaceHolder" onClick={props.toggling}></div>
        </div>
    );
}