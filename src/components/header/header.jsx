import React from "react";
import "./header.scss";


const Header = () =>{
     
    return(
        <header>
            <div className="container">
                <div className="header">
                     <div className="header__left">
                     <div className="header__left__logo"><a href="">Medical Core</a></div>
                     <input type="checkbox" id="input" />
                    <ul id="nav" className="header__left__nav">
                        <li className="header__left__nav__li"><a href="#">Home</a></li>
                        <li className="header__left__nav__li"><a href="#">Product</a></li>
                        <li className="header__left__nav__li"><a href="#">Pricing</a></li>
                        <li className="header__left__nav__li"><a href="#">Contact</a></li>
                    </ul>
                    <label for="input" id="all" ></label>
                     </div>
                    <div className="header__buttons">
                        <button className="header__buttons__login">Login</button>
                        <button className="header__buttons__join">join us<i class="fa-solid fa-right-long"></i></button>
                    </div>
                    <label for="input" className="bar" id="bar"><i className="fa-solid fa-bars"></i></label>
                </div>
            </div>
        </header>
    )
}
export default Header

