import React , {useState}from "react";
import { Link} from 'react-scroll';
import './Navbar.scss'
import westpalm from '../../Assets/West Palm.png'




const Navbar=()=>{
    
    const [active , setActive] = useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
    }

    const removeNav =()=>{
        setActive('navBar')
    }

    const [transparent, setTransparent] = useState('header')
    const addBg=()=>{
        if(window.scrollY >=10){
            setTransparent('header activeHeader navLink');
        }
        else{
            setTransparent('header')
        }
    }
   
    window.addEventListener('scroll',addBg)
    return(

        <section className="navBarSection">
            <div className={transparent}>
                <div className="logoDiv">
                    <Link to="home" className="logo">
                        
                        <img className="icon" src={westpalm}/><span className="">WEST PALM CONSULTANTS</span>
                        {/* <h1 className="icon">WEST PALM CONSULTANTS</h1>  */}
                    </Link>

                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={1500}  className="navLink">Home</Link>   
                        </li>

                        <li className="navItem">
                            <Link to="about"  smooth={true} offset={-70} duration={1500}  className="navLink">About</Link>   
                        </li>

                        <li className="navItem">
                            <Link to="service" spy={true} smooth={true} offset={-70} duration={1500}  className="navLink">Service</Link>   
                        </li>

                        <li className="navItem">
                            <Link to="project" spy={true} smooth={true} offset={-70} duration={1500}  className="navLink">Project</Link>   
                        </li>

                        <li className="navItem">
                            <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000}  className="navLink">Contact</Link>  
                        </li>

                        


                    </ul>
                    <div onClick={removeNav} className="closeNavbar"> 
                    <i className="fa fa-times icon" aria-hidden="true"></i>
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar icon">
                   <i className="fa-solid fa-bars icon"></i>

                </div>
            

            </div>

        </section>
      
    )

}
export default Navbar;