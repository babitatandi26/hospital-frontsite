import React from "react";
import "./AboutSection.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Divider from '@material-ui/core/Divider';
import sideImage from "../hospitalImages/05a.jpg";

const AboutSection = () => {
    return(
        <>
            <div className="aboutsection" style={{marginTop:"200px"}}>
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-6 col-md-6 col-12" style={{marginBottom:"20px"}}>
                            <h2 style={{marginTop:"20px"}}>About Us</h2><hr/><br/>
                            <h4>What we are and our history</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1600s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                           <br/>
                            <Divider style={{color:"grey"}}/><br/>
                            <h2>Vision and Mission</h2><br/>
                            <h4>Our goal and thoughts</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1600s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                        </div>
                      
                        <div className="col-lg-6 col-md-6 col-12 image" style={{marginTop:"150px"}} >
                            <img src={sideImage} alt="sideImage" height="600px" width="500px"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection;