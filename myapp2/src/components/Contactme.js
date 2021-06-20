import React from "react";
import "./Contactme.css";
import emailjs from "emailjs-com";

function Contactme(){

    const sendemail = (e)=>{
        e.preventDefault();


        emailjs.sendForm('service_m1v4qxa','template_4zlnkvl',e.target,'user_2zDol7bSrAHjTXt85E49r').then(res =>{
            document.querySelector('.thumbsup').style.display = "block";
        }).catch(err=> alert("Enter valid Email ID"));
        e.target.reset();
    }

    return(
        <div className="contact">
            <div className="contactme">
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={sendemail}>
                    <label className="contact-opt">Name</label>
                    <input className="contact-name-field" type="text" name="name" />

                    <label className="contact-opt">Email</label>
                    <input className="contact-email-field" type="email" name="user_email" />

                    <label className="contact-opt">Message</label>
                    <textarea className="contact-message-field" name="message" rows="4" />
                    <input className="contact-submit-btn" type="submit" name="Send" />
                    <div className="thumbsup"><i class="far fa-thumbs-up"></i></div>

                </form>
            </div>
            <div className="followme">
                <h2>Follow Me</h2>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/shashank-singh-1a63a11b0/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100038820051686" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/shashanksingh8669/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/Shashank19342" target="_blank"><i class="fab fa-github-square"></i></a>
                </div>
                <p>Feel free to Contact Me or Follow Me from above.</p>
                <p>Drop your Feedbacks or suggestions on above projects.</p>
            </div>
        </div>
    )
}


export default Contactme;

