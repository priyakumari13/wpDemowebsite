import React, { useState } from "react";
import './Contact.scss';



const Contact = () => {
    const [formData, setFormData] = useState({});
    const handleInputChange = (event) => {

        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }


    return (

        <div className="contactUs" id="contact">
            <div className="title">
                <h2>Contact Us</h2>
            </div>

            <div className="box">
                <div className="contact form">
                    <h3>Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formBox">
                            <div className="row50">
                                <div className="inputBox">
                                    <span>Full Name</span>
                                    <input type="text" placeholder="priya kumari" onChange={handleInputChange} name="fname" />
                                </div>
                                <div className="inputBox">
                                    <span>Phone</span>
                                    <input type="Number" placeholder="123345556" onChange={handleInputChange} name="phone" />
                                </div>
                            </div>

                            <div className="row100">
                                <div className="inputBox">
                                    <span>Email</span>
                                    <input type="email" placeholder="priya@gmail.com" onChange={handleInputChange} name="email" />
                                </div>

                            </div>
                            <div className="row100">
                                <div className="inputBox">
                                    <span>Message</span>
                                    <textarea placeholder="write your message...." onChange={handleInputChange} name="message"></textarea>
                                </div>
                            </div>

                            <div className="row100">
                                <div className="inputBox">

                                    <input type="submit" value="Send Message" />
                                </div>
                            </div>

                        </div>
                    </form>


                </div>
                <div className="contact info">
                    <h3>Contact Info</h3>
                    <div className="infoBox">
                        <div>
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <p>Hyderabad, Jaipur, Delhi</p>
                        </div>

                        <div>
                            <span><i class="fa-solid fa-phone" aria-hidden="true"></i></span>
                            <a href="mailTo">wp@westpalmcs.com</a>
                        </div>

                        <div>
                            <span><i class="fa-solid fa-envelope" aria-hidden="true"></i></span>
                            <a href="phoneNum">+91 986 567 00066</a>
                        </div>

                        {/*-----------social media links-------*/}

                        <ul className="sci">
                            <li><a href="https://www.linkedin.com/company/west-palm-consultants-private-limited/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>

                    </div>



                </div>
                <div className="contact map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487293.47787577356!2d78.07836704726175!3d17.
                41273322980855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1693833829378!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>


                </div>
            </div>


            <div class="copyright-bar">
                <span className="copyright-bar-span">
                    © Copyright 2022 WEST PALM CONSULTANTS PRIVATE LTD
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    All Rights Reserved&nbsp;&nbsp;|&nbsp;
                    <a href="">Terms and Conditions</a>
                </span>
            </div>


        </div>

    )

}
export default Contact;