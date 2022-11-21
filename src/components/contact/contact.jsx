import React from "react";
import "./contact.scss";

const Contact = () =>{
    return(
       <section className="form">
            <div className="form__mintitle">Newsletter</div>
            <div className="form__title">JOIN US</div>
            <div className="form__p">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </div>

            <form action="">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </form>

       </section>
    )
}

export default Contact;