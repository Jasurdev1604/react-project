import React from "react";
import "./section2.scss";
import image from "../../assets/img/q.png"

const Section2 = () =>{
    return(
        <div className="container">
            <div className="section2">
                <div className="section2__img">
                    <img src={image} alt="" />
                </div>
                <div className="section2__item">
                    <div className="section2__item__span"></div>
                    <div className="section2__item__title">Meet Our Experts</div>
                        <div className="section2__item__p">
                              Problems trying to resolve the conflict between 
                            the two major realms of Classical physics: 
                            Newtonian mechanics 
                        </div>
                        <div className="section2__item__button">
                            <button>Learn More <i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;