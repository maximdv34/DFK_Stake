import React from "react";
/*import { Link } from "react-router-dom";*/
import './styles/AboutUs.css';

export default function AboutUs() {
    return (
        <div className="AboutUs">
             <div className="HomeMain">
                DFK Stake
                <img alt="logo" src='./static/images/logo.png' />
             </div>
             <div className="AboutUsMain">
                    <div className="c1r1"><div>This is a project in the innovative ecosystem - Web3.0.</div></div>
                    <div className="c2r1"><img alt="AboutUs1" src="../static/images/AboutUs/AboutUs1.png" /></div>


                    <div className="c1r2"><img alt="AboutUs2" src="../static/images/AboutUs/AboutUs2.png" /></div>
                     <div className="c2r2"><div>Web3.0 is the concept of a new iteration of the development of the Web,
                         which would be decentralized and based on blockchains. This is a new type of architecture
                         that is based on smart contracts (hashed interactions) between user nodes that can make
                         transactions (smart contracts) mutually confirmed by both parties, which is the main
                         achievement of blockchain technology.
                     </div></div>


                     <div className="c1r3"><div>Our project is staking cryptocurrencies in this ecosystem.
                         Staking can be compared to a bank deposit. You store coins in a cryptocurrency
                         wallet to keep the blockchain running.</div></div>
                    <div className="c2r3"><img alt="AboutUs3" src="../static/images/AboutUs/AboutUs3.png" /></div>


                    <div className="c1r4"><img alt="AboutUs4" src="../static/images/AboutUs/AboutUs4.png" /></div>
                     <div className="c2r4"><div>So you block a certain amount of cryptocurrency, that is,
                         you cannot use it for a certain time. For this you get a reward in the form of these coins.
                     </div></div>

             </div>
    </div>
    );
}