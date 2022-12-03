import React from "react";
import "./style.scss"
import Logo from "../../assets/images/main-logo.png"
import Bin from "../../assets/images/bin.png"

export const Header = ()=>{


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
            <a href="#">8 8 (800) 600-09-90</a>
            <img className="P-header-bin" src={Bin} alt="Bin"/>
        </div>
    </header>
}