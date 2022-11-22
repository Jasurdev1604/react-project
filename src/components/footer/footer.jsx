import React from "react";
import "./footer.scss";

const Footer = () =>{
    return(
        <div className="container">
            <div className="footer">
                <ul className="footer__item">
                    <li className="footer__item__title">Company Info </li>
                    <li className="footer__item__li">About Us</li>
                    <li className="footer__item__li">Carriler</li>
                    <li className="footer__item__li">We are hiring</li>
                    <li className="footer__item__li">Blog</li>
                </ul>
                <ul className="footer__item">
                    <li className="footer__item__title">Legal</li>
                    <li className="footer__item__li">About Us</li>
                    <li className="footer__item__li">Carriler</li>
                    <li className="footer__item__li">We are hiring</li>
                    <li className="footer__item__li">Blog</li>
                </ul>
                <ul className="footer__item">
                    <li className="footer__item__title">Features</li>
                    <li className="footer__item__li">Business Marketing</li>
                    <li className="footer__item__li">User Analytic</li>
                    <li className="footer__item__li">Live Chat</li>
                    <li className="footer__item__li">Unlimited Support</li>
                </ul>
                <ul className="footer__item">
                    <li className="footer__item__title">Resources</li>
                    <li className="footer__item__li">IOS  Android</li>
                    <li className="footer__item__li">Watch a Demo</li>
                    <li className="footer__item__li">Customers</li>
                    <li className="footer__item__li">API</li>
                </ul>
                <ul className="footer__item">
                    <li className="footer__item__title">Get In Touch</li>
                    <li className="footer__item__li">
                    <i class="fa-solid fa-phone"></i>
                    (480) 555-0103
                    </li>
                    <li className="footer__item__li">
                    <i class="fa-solid fa-location-dot"></i>
                    4517 Washington Ave. Manchester, <br />
                    Kentucky 39495
                    </li>
                    <li className="footer__item__li">
                    <i class="fa-solid fa-comment"></i>
                    debra.holt@example.com
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;