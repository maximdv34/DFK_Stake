import React, { useState } from 'react';
import './styles/LanguageMenu.css';

export default function LanguageMenu(props){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            <div className="LanguageButton" onClick={toggle}>
                <img src="./static/images/languageButton.png" alt="LanguageChange" />
        </div>

        { isOpen && (
            <div id="language" className="LanguageMenu">
                    <div className="LanguageMenuRow" onClick={toggle}>
                        <div className="LanguageMenuFlagContainer"><img src="./static/images/Languages/English.png" alt="English" /></div>
                    <div className="LanguageMenuSignContainer">English</div>
                </div>
                <div className="LanguageMenuRow" onClick={toggle}>
                    <div className="LanguageMenuFlagContainer"><img src="./static/images/Languages/Ukraine.png" alt="Ukraine"/></div>
                    <div className="LanguageMenuSignContainer">Ukrainian</div>
                </div>
            </div>
            )}
        </>
        );
}