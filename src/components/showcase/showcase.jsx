import React from "react";
import "./showcase.scss";
import none from "../../assets/img/none.png";

const Showcase = () => {
    return(
     <header>
        <div className="showcase">
            <div className="showcase__item">
                    <div className="showcase__item__mintitle">Welcome</div>
                    <div className="showcase__item__title">A Great Place to Receive Care</div>
                    <div className="showcase__item__p">Get your best looking smile now!</div>
                    <div className="showcase__item__buttons">
                        <button className="join">Joun us</button>
                        <button className="learn">Learn more</button>
                    </div>
            </div>   
            <div className="showcase__img">
                <img src={none} alt="" />
            </div>
        </div>
     </header>
    )
}
export default Showcase;