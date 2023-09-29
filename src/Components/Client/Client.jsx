import React from "react";
import './Client.scss';
import wrightBrother from '../../Assets/wrightBrother.png';
import mag from '../../Assets/Mag2.jpg';
import kastconstruction from '../../Assets/kastconstruction.jpg';
import waypoint from '../../Assets/waypoint.png';
import aloft from '../../Assets/aloft.png';
import kkittle from '../../Assets/kkittle.png';
import olympus from '../../Assets/olympus.jpg';


const Client=()=>{

    return(
        <section className="client section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Clients & Project Owners</h2>
                </div>

                <div className="mainContent container grid">

                    <div className="singleItem">
                        <img src={wrightBrother} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={mag} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={kastconstruction} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={waypoint} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={aloft} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={kkittle} alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src="" alt="noImg"/>
                    </div>

                    <div className="singleItem">
                        <img src={olympus} alt="noImg"/>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Client;
