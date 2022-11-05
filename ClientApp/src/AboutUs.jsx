import React from "react";
/*import { Link } from "react-router-dom";*/
import './styles/AboutUs.css';

export default function AboutUs() {
    return (
        <>
        <div>
            <div className="HomeMain">
                DFK Stake
                <img src='./static/images/logo.png' />
            </div>
        </div>
        <div className="AboutUs">
            <div>
                <div>
                    <div>This is a project in the innovative ecosystem - Web3.0.</div>
                </div>
                <div><img src="../static/images/AboutUs/AboutUs1.png"/></div>
            </div>
            <div>
                <div><img src="../static/images/AboutUs/AboutUs2.png" /></div>
                <div>
                        <div>Web3.0 is the concept of a new iteration of the development of the Web, which would be
                            decentralized and based on blockchains. This is a new type of architecture that is based
                            on smart contracts (hashed interactions) between user nodes that can make transactions
                            (smart contracts) mutually confirmed by both parties, which is the main achievement of
                            blockchain technology.</div>
                </div>
            </div>
            <div>
                <div>
                        <div>Our project is staking cryptocurrencies in this ecosystem.
                            Staking can be compared to a bank deposit. You store coins
                            in a cryptocurrency wallet to keep the blockchain running. </div>
                </div>
                <div><img src="../static/images/AboutUs/AboutUs3.png" /></div>
            </div>
            <div>
                <div><img src="../static/images/AboutUs/AboutUs4.png" /></div>
                <div>
                        <div>So you block a certain amount of cryptocurrency, that is, you cannot use
                            it for a certain time. For this you get a reward in the form of these coins. </div>
                </div>
            </div>
            </div>
            </>
    );
}