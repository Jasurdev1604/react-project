import React from "react";
import "./section1.scss";
import image1 from "../../assets/img/s.png"
import image2 from "../../assets/img/p.png"

const Section1 = () =>{
    return (
        <div className="container">
            <div className="section">
                <div className="section__item">
                    <div className="section__item__span"></div>
                    <div className="section__item__title">Our Activity</div>
                    <div className="section__item__p">
                        Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: 
                        Newtonian mechanics 
                    </div>
                    <div className="section__item__button">
                        <button>Learn more <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="section__boxes">
                    <div className="section__boxes__box">
                        <div className="section__boxes__box__img">
                            <img src={image1} alt="" />
                        </div>
                        <div className="section__boxes__box__title">Book now</div>
                        <div className="section__boxes__box__span"></div>
                        <div className="section__boxes__box__p">
                        The gradual accumulation of information about 
                        </div>
                    </div>
                    <div className="section__boxes__box">
                        <div className="section__boxes__box__img">
                            <img src={image2} alt="" />
                        </div>
                        <div className="section__boxes__box__title">Health Queries</div>
                        <div className="section__boxes__box__span"></div>
                        <div className="section__boxes__box__p">
                        The gradual accumulation of information about 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;