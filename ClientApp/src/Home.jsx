import React, { useState } from "react";
import {Link} from "react-router-dom";
import './styles/Home.css';
import MainSign from "./MainSign.jsx";

export default function Home() {
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    if (toggle) {
        return (
            <>
                <MainSign />
                <main className="HomeMainContainer">
                    <div className="HomeContainer">
                        <div className="HomeContainerMainSign">Used by millions. Trusted with billions.</div>
                        <div className="HomeContainerSignContainer">
                            <div className="HomeContainerSmallSign">DFK Stake has the most users of any decentralized platform, ever.</div>
                            <div className="HomeContainerSmallSign">And those users are now entrusting the platform with over $4 billion in funds.</div>
                        </div>    
                    </div>
                    <div className="ExpandedHomeContainer">
                        <div className="HomeContainer HomeContainerWidthDisabled">
                            <div className="HomeContainerMainSign">Earn passive income with crypto.</div>
                            <div className="HomeContainerSignContainer">
                                <div className="HomeContainerSmallSign">DFK Stake makes it easy to make your crypto work for you.</div>
                            </div>
                            <div className="HomeContainerButtonsContainer">
                                <div className="HomeContainerButtonsButtonContainer">
                                    <button className="HomeContainerButtonsButton" onClick={changeToggle}>Explore</button>
                                </div>
                                <div className="HomeContainerButtonsButtonContainer">
                                    <Link to={'AboutUs'}><button className="HomeContainerButtonsButton">Learn</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="HomeContainerMainSign">Reward calculation</div>
                        <div className="HomeContainerSignContainer">
                        <div className="HomeContainerSmallSign">Staking is a great way to get passive income in cryptocurrency -
                            neither video cards nor processors are needed here; with staking, you can earn rewards for simply
                                keeping coins in your wallet. </div>
                        </div>
                    </div>
                </main>
            </>
            );
    }
    else {
        return (
            <>
            <MainSign/>
            <main className="HomeMainContainer">
                <div className="HomeContainer">
                        <div className="HomeContainerMainSign">Used by millions. Trusted with billions.</div>
                        <div className="HomeContainerSignContainer">
                            <div className="HomeContainerSmallSign">DFK Stake has the most users of any decentralized platform, ever.</div>
                            <div className="HomeContainerSmallSign">And those users are now entrusting the platform with over $4 billion in funds.</div>
                        </div>
                </div>
                <div className="HomeContainer">
                        <div className="HomeContainerMainSign">Earn passive income with crypto.</div>
                        <div className="HomeContainerSignContainer">
                            <div className="HomeContainerSmallSign">DFK Stake makes it easy to make your crypto work for you.</div>
                        </div>
                        <div className="HomeContainerButtonsContainer">
                            <div className="HomeContainerButtonsButtonContainer">
                                <button className="HomeContainerButtonsButton" onClick={changeToggle}>Explore</button>
                            </div>
                            <div className="HomeContainerButtonsButtonContainer">
                                <Link to={'AboutUs'}><button className="HomeContainerButtonsButton">Learn</button></Link>
                            </div>
                    </div>
                </div>
                </main>
                </>
            );
    }
}