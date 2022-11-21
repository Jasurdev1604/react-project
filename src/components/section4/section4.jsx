import React from "react";
import "./section4.scss";
import img1 from "../../assets/img/001.png";
import img2 from "../../assets/img/002.png";    
import img3 from "../../assets/img/003.png";
import img4 from "../../assets/img/004.png";

const Section4 = () =>{
    return(
        <div className="container">
              <div className="section4">
                <div className="section4__mintitle">Team</div>
                <div className="section4__title">Our Team</div>
                <div className="section4__p"> 
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics 
                </div>

                <div className="section4__content">
                    <div className="section4__content__item">
                        <div className="section4__content__item__img">
                            <img src = {img1} alt="" />
                        </div>
                        <div className="section4__content__item__title">
                         Julian Jameson
                        </div>
                        <div className="section4__content__item__p">Profession</div>
                        <div className="section4__content__item__icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="section4__content__item">
                        <div className="section4__content__item__img">
                            <img src = {img2} alt="" />
                        </div>
                        <div className="section4__content__item__title">
                         Julian Jameson
                        </div>
                        <div className="section4__content__item__p">Profession</div>
                        <div className="section4__content__item__icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="section4__content__item">
                        <div className="section4__content__item__img">
                            <img src = {img3} alt="" />
                        </div>
                        <div className="section4__content__item__title">
                         Julian Jameson
                        </div>
                        <div className="section4__content__item__p">Profession</div>
                        <div className="section4__content__item__icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="section4__content__item">
                        <div className="section4__content__item__img">
                            <img src = {img4} alt="" />
                        </div>
                        <div className="section4__content__item__title">
                         Julian Jameson
                        </div>
                        <div className="section4__content__item__p">Profession</div>
                        <div className="section4__content__item__icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section4;