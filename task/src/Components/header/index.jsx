import React, {useState} from "react";
import "./style.scss"
import Logo from "../../assets/images/main-logo.png"
import Bin from "../../assets/images/bin.png"

export const Header = ()=>{
    const [flag,setFlag] = useState(false)


    const Change = ()=>{
        setFlag(!flag)
    }

    return <header className="G-flex G-align-center">
        <div className="G-container G-flex G-justify-between G-align-center">
            <div className="P-header-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="P-header-menu">
                <ul className="G-flex">
                    <li>FAQ</li>
                    <li>Оплата и доставка</li>
                    <li>Возврат</li>
                    <li>Исследования</li>
                    <li>Личный кабинет</li>
                </ul>
            </div>
            <div className="G-flex G-align-center">
                <div className="P-header-bin">
                    <img src={Bin} alt="Bin"/>
                    <span>1</span>
                </div>
                <div className="P-header-menu-m">
                    <div onClick={Change} className="G-flex G-justify-between G-flex-column">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    {flag? <ul>
                        <li>FAQ</li>
                        <li>Оплата и доставка</li>
                        <li>Возврат</li>
                        <li>Исследования</li>
                        <li>Личный кабинет</li>
                        <li>8 8 (800) 600-09-90</li>
                    </ul> : null}
                </div>
            </div>
        </div>
    </header>
}