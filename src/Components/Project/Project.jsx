import React,{useEffect} from "react";
import './Project.css';
import './Project.scss';
import img1 from '../../Assets/image1.jpg';
import img2 from '../../Assets/image2.jpg';
import img3 from '../../Assets/image3.jpg';
import img4 from '../../Assets/image4.jpg';
import Aos from "aos";
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: img1,
        proTitle: 'Tcs Projec',
        description:'tcs working project pic',
        status: 'working'

    },
    {
        id: 2,
        imgSrc: img2,
        proTitle: 'wipro Projec',
        description:'wipro working project pic',
        status: 'working'
    },
    {
        id: 3,
        imgSrc: img3,
        proTitle: 'congnifent Projec',
        description:'congi working project pic',
        status: 'working'
    },
    {
        id: 4,
        imgSrc: img4,
        proTitle: 'infogain Projec',
        description:'infogain working project pic',
        status: 'Complete'
    }


]

const Project = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="popular section container" id="project">
            <div className="secContainer">
                <div className="secHeader flex">

                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">
                            Our Projects
                        </h2>
                    </div>
                    {/* <div className="iconsDiv flex">
                        <i className="fa-solid fa-arrow-left icon leftIcon"></i>
                        <i className="fa-solid fa-arrow-right icon rightIcon"></i>

                    </div> */}

                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id,imgSrc,proTitle,description,status}) => {
                            return (
                                <div data-aos="fade-up"  className="singleProject">
                                    <div className="projectImg">
                                        <img src={imgSrc} alt="Image title" />
                                        <div className="overlayInfo">
                                            <h3>{proTitle}</h3>
                                            <p>{description}</p>
                                            <i className="fa-solid fa-arrow-right icon"></i>
                                        </div>
                                    </div>
                                    <div className="proFooter">
                                        <div className="number">
                                        0{id}
                                        </div>
                                        <div className="proText flex">
                                            <h6>{status}</h6> 
                                           {/*  <span className="flex">
                                                <span className="dot">
                                                    <i className="fas fa-dot-circle icon"></i>
                                                </span>
                                                dot
                                            </span> */}
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }


                    



                </div>

            </div>

        </div>

    )

}
export default Project;