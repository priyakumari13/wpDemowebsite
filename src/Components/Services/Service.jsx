import React,{useEffect} from "react";
import './Service.scss';
import img1 from '../../Assets/image5.jpg';
import img2 from '../../Assets/images6.jpg';
import img3 from '../../Assets/image7.jpg';
import Aos from "aos";
import 'aos/dist/aos.css'


const Services = [
    {
        id: 1,
        imgSrc: img1
       
        

    },
    {
        id: 2,
        imgSrc: img2
        
        
    },
    {
        id: 3,
        imgSrc: img3
    },
]
const Service = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])
    return (
        <section className="service section" id="service">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="1000" className="secIntro">
                    <h3 className="secTitle">
                        Services
                    </h3>
                </div>


                <div className="mainContent container grid">
                <div data-aos="fade-up" data-aos-duration="1500"  className="singleItem">
                    <img src={img1} alt=""/>
                    <h3>BIM (Building Information Modelling)</h3>
                    <p>Building Information Modeling (BIM) is the foundation of digital transformation in the architecture, engineering, and construction (AEC) industry. Services for all trades - Architectural, Structural, Mechanical, Electrical, Plumbing  Fire Protection</p>


                </div>

                <div data-aos="fade-up" data-aos-duration="2000"  className="singleItem">
                    <img src={img2} alt=""/>
                    <h3>4D Scheduling</h3>
                    <p>Time animated models are created to represent the planned construction sequence. 4D adds the time dimension of the construction schedule to the 3D model, by linking of each activity off a Gantt chart to the BIM. 4D facilitates the planning of the work and makes communication with other stakeholders easier. We also link the cost or fifth dimension to the 4D BIM, creating 5D cost schedules that facilitates cost-benefit analysis.</p>
                    

                </div>
                <div data-aos="fade-up" data-aos-duration="2500"  className="singleItem">
                    <img src={img3} alt=""/>
                    <h3>Estimation services for all trades</h3>
                    <p>The process by which a BIM model is used to generate an accurate estimate of the quantities and costs related to the construction of a work. </p>
                    

                </div>
                 
            </div>
            

               
            </div>


        </section>

    )

}
export default Service;