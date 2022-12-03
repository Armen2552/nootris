import React from "react";
import "./style.scss"
import Bg from "../../assets/images/bg.jpg"
import Lemon from "../../assets/images/Mask Group.png"
import Nootris from "../../assets/images/nootris.png"
import Ginger from "../../assets/images/ginger.png"
import Vorus from "../../assets/images/vorus.png"


export const Section = ()=>{

    return <div className="P-main">
        <div className="P-section-cover" style={{backgroundImage: `url(${Bg})`}}>
            <div className="G-container">
                <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                <p>Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма</p>
                <h2>NOOTRIS ПОМОГАЕТ</h2>
                <span>Вашему организму во время пандемии и сезонных простуд</span>
            </div>
            <img src={Lemon} alt="Lemon"/>
        </div>
        <div className="P-section-black">
            <h2>
                ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                <span> СО СКИДКОЙ -15% ПЕРВЫМ!</span>
            </h2>
            <div className="P-price">
                <span>750₽</span>
                <span>690₽</span>
            </div>
            <div className="P-orders G-flex G-justify-between">
                <div className="P-ginger">
                    <img src={Ginger} alt="Ginger"/>
                    <p>Содержит</p>
                    <span>имбирь</span>
                </div>
                <div className="P-ginger">
                    <img src={Nootris} alt="Nootris"/>
                    <p>+ Бесплатная доставка</p>
                    <span>Специальная цена</span>
                </div>
                <div className="P-ginger">
                    <img src={Vorus} alt="Vorus"/>
                    <p>Нейтрализует</p>
                    <span>вирусы</span>
                </div>
            </div>
            <button>Оформить заказ!</button>
        </div>
    </div>
}