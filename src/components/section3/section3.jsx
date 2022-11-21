import React from "react";
import "./section3.scss";
import img1 from "../../assets/img/01.png";
import img2 from "../../assets/img/02.png";

const Section3 = () =>{
    return(
        <div className="container">
            <div className="section3">
                <div className="section3__mintitle">Practice Advice</div>
                <div className="section3__title">The Best Reference</div>
                <div className="section3__p"> 
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics 
                </div>

                <div className="section3__content">
                    <div className="section3__content__item">
                        <div className="section3__content__item__img">
                            <img src={img1} alt="" />
                            <div className="abs-btn">
                                <button>Salo</button>
                            </div>
                            <div className="abs-icon">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className="section3__content__item__word">
                            <div className="span">
                                <p>Painless procedures</p>
                                <span><i className="fa-solid fa-star"></i> 4.9</span>
                            </div>
                            <h3>Quick examination</h3>
                            <p className="ph">
                            We focus on ergonomics and 
                            meeting you where you work. It's 
                            only a keystroke away.
                            </p>
                            <p className="sale">15 Sales</p>
                            <p className="narx">$16.48 <span>$6.48</span></p>
                            <div className="icons">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>22h...</span>
                            <i class="fa-solid fa-chart-column"></i>
                            <span>64 Lessons</span>
                            <i class="fa-solid fa-chart-area"></i>
                            <span>Progress</span>
                            </div>
                            <button>Learn More <i className="fa-solid fa-chevron-right"></i></button>

                        </div>
                    </div>
                    <div className="section3__content__item">
                        <div className="section3__content__item__img">
                            <img src={img2} alt="" />
                            <div className="abs-btn">
                                <button>Salo</button>
                            </div>
                            <div className="abs-icon">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className="section3__content__item__word">
                            <div className="span">
                                <p>Painless procedures</p>
                                <span><i className="fa-solid fa-star"></i> 4.9</span>
                            </div>
                            <h3>Quick examination</h3>
                            <p className="ph">
                            We focus on ergonomics and 
                            meeting you where you work. It's 
                            only a keystroke away.
                            </p>
                            <p className="sale">15 Sales</p>
                            <p className="narx">$16.48 <span>$6.48</span></p>
                            <div className="icons">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>22h...</span>
                            <i class="fa-solid fa-chart-column"></i>
                            <span>64 Lessons</span>
                            <i class="fa-solid fa-chart-area"></i>
                            <span>Progress</span>
                            </div>
                            <button>Learn More <i className="fa-solid fa-chevron-right"></i></button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3;