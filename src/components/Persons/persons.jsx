import React from "react";
import "./persons.scss";
import img1 from "../../assets/img/img.png";
import img2 from "../../assets/img/imgg.png";

const Person = () =>{
    return(
        <div className="container">
            <div className="person">
            <div className="person__mintitle">Testimonials</div>
                <div className="person__title">See Our Impressions</div>
                <div className="person__p"> 
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics 
                </div>

                <div className="person__content">
                    <div className="person__content__item">
                        <div className="person__content__item__img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="person__content__item__p">
                             Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.
                        </div>
                        <div className="person__content__item__icons">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="person__content__item__title">Regina Miles</div>
                        <div className="person__content__item__mintitle"> Designer</div>
                    </div>
                    <div className="person__content__item">
                        <div className="person__content__item__img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="person__content__item__p">
                             Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.
                        </div>
                        <div className="person__content__item__icons">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="person__content__item__title">Regina Miles</div>
                        <div className="person__content__item__mintitle"> Designer</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Person;