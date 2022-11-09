import React from "react";
import {Link} from "react-router-dom";
import './styles/Home.css';
import MainSign from "./MainSign.jsx";

export default function Home() {
     return(
         <>
             <MainSign />
             <main>    
                 <div>
                    <div>
                         <h1>Used by millions. Trusted with billions.</h1>
                         <p>DFK state has the most users of any decentralized platform ever.</p>
                         <p>And those users are now entrusting the platfrom with over 10$ billion in funds</p>
                    </div>
                    <div>
                         <h1>Earn passive income with crypto.</h1>
                         <p>DFK State makes it easy to make your crypto work for you.</p>
                         <div className="ButtonsContainer">
                            <Link to={'AboutUs'}><button>Explore</button></Link>
                            <Link to={'AboutUs'}><button>Learn</button></Link>
                         </div>
                     </div>
                 </div>
             </main>
    </>
    );
}