import React,{useEffect} from "react";
import './Home.scss';
import Aos from "aos";
import 'aos/dist/aos.css'
const Home=()=>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <section className="home" id="home">
            
            <div className="setContainer container">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">
                        Grow your Business with WEST PALM Consultants
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                        We are team of best experienced developers
                    </p>
                    
                    <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                        <a href="https://www.westpalmcs.com/_files/ugd/0349fd_f266c3fee11140b0ab9777eadf463102.pdf?index=true"  target="_blank">Explore Now</a>
                    </button>
                </div>

            </div>
             
        </section>
      
    )

}
export default Home;