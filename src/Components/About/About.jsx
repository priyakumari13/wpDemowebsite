import React,{useEffect} from "react";
import './About.scss';
import mngr from '../../Assets/mngr.jpg';
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])
    return (
        <div className="about" id="about">

            <div data-aos="fade-up" data-aos-duration="1000" className="about-section">
                <h1 >About Us</h1>
                <p>We, at West Palm Consultants, aim to achieve the highest standards in MEP (BIM) and enable our clients 
                    to execute projects within Time, with Quality and under Budget. We are a growing company 
                    which is supported by a team of extremely talented and smart (hard) working individuals who 
                    care for the needs and requirements of our clients</p>
                <p>We are a lean organization with a flat hierarchy which enables us to be 
                    quick and responsive to the specific needs of 
                    the clients and support them even on short notice.</p>
            </div>

            <h2 data-aos="fade-up" data-aos-duration="1500" >Our Team</h2>
            <div className="row teams">
                <div className="column">
                    <div data-aos="fade-up" data-aos-duration="2000" className="card">
                        <img src={mngr} alt="Jane" />
                        <div className="container">
                            <h2>Kaushal vijay</h2>
                            <p className="title">CEO & Founder</p>
                            <p>kvijay@westpalmcs.com</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div data-aos="fade-up" data-aos-duration="2000" className="card">
                        <img src={mngr} alt="Mike" />
                        <div className="container">
                            <h2>Kaushal vijay</h2>
                            <p className="title">Director</p>
                            <p>kvijay@westpalmcs.com</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div data-aos="fade-up" data-aos-duration="2000" className="card">
                        <img src={mngr} alt="John" />
                        <div className="container">
                            <h2>Kaushal vijay</h2>
                            <p className="title">Manager</p>
                            <p>kvijay@westpalmcs.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About
