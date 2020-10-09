import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/pexels-jonathan-borba-3259629(1).jpg";
import Divider from '@material-ui/core/Divider';
import i2 from "../hospitalImages/icons8-call-40.png";
import i3 from "../hospitalImages/icons8-task-40.png";
import i4 from "../hospitalImages/icons8-heart-40.png";
import i5 from "../hospitalImages/icons8-water-40.png";
import Doctors from "../Home/Doctors";

const VisionMission =() =>{
    return(
        <>
        <div className="container">
                    <div className="row" style={{marginTop:"100px",textAlign:"left"}}>
                        <div className="col-lg-8 col-md-8 col-12">
                            <h2>Our Mission</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>sed do eiusm od tempor incididunt ut labore et dolore magna aliqua.</p>
                           <br/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-6">
                                        <table>
                                            <tr>
                                                <td><img src={i2} alt="img2"/></td>
                                                <td>
                                                    <h5>Health information</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i3} alt="img3"/></td>
                                                <td>
                                                    <h5>Medical education</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-6">
                                    <table>
                                            <tr>
                                                <td style={{marginRight:"20px"}}><img src={i5} alt="img5"/></td>
                                                <td>
                                                    <h5>Symptom Check</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i4} alt="img4"/></td>
                                                <td>
                                                    <h5>Qualified Doctors</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>      
                        <div className="col-lg-4 col-md-4 col-12" style={{border:"2px solid #118574"}}>
                            <h4 style={{margin:"20px",textAlign:"center"}}>MONDAY-FRIDAY</h4>
                            <h6 style={{margin:"20px",textAlign:"center"}}>OPENING HOURS</h6>
                            <p align="justify">Lorem ipsum dolor sit amet, consectetur adi pisic ing elit, sed do eiusmod tempor incidid.</p>
                            <table style={{margin:"10px"}}>
                                <tr >
                                    <td style={{marginTop:"50px"}}>INTETMIST DOCTOR</td><br/><br/>
                                    <td style={{margin:"20px",textAlign:"right"}}>08:00 – 20:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>FAMILY DOCTOR</td><br/><br/>
                                    <td>09:00 – 17:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>PEDIATRICIAN</td><br/><br/>
                                    <td>08:00 – 16:00</td><br/><br/>
                                </tr>
                                <Divider/>
                                <tr>
                                    <td>PHYSIOTHEREPIST</td><br/><br/>
                                    <td>10:00 – 15:00</td><br/><br/>
                                </tr>
                                <Divider/>
                            </table>
                        </div>             
                    </div>

                    <div className="row" style={{marginTop:"100px",textAlign:"left"}}>
                    <div className="col-lg-4 col-md-4 col-12" style={{border:"2px solid #118574"}}>
                            <h4 style={{margin:"20px",textAlign:"center"}}>GOALS</h4>
                            <table style={{margin:"10px"}}>
                                <tr >
                                    <td style={{marginTop:"50px"}}>To provide opportunities to discover and develop talents of each student.</td><br/><br/>
                                </tr><br/>
                                <Divider/><br/>
                                <tr>
                                    <td>To equip students with a sound value system to live as good human beings and impart substantial knowledge and skill to achieve excellence in diverse fields.</td><br/><br/>
                                </tr><br/>
                                <Divider/><br/>
                                <tr>
                                    <td>To promote numerous co-curricular activities for the integral growth of students.</td><br/><br/>
                                </tr><br/>
                                <Divider/><br/>
                                <tr>
                                    <td>
To motivate students in making learning a lifelong process and to strive for self-improvement, self growth and sell transcendence.</td><br/><br/>
                                </tr><br/>
                                <Divider/><br/>
                            </table>
                        </div>     
                        <div className="col-lg-8 col-md-8 col-12" style={{textAlign:"center",marginLeft:"0px"}}><br/><br/>
                            <h2>Our Vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>sed do eiusm od tempor incididunt ut labore et dolore magna aliqua.</p>
                           <br/>
                            <div className="container">
                                <div className="row" style={{marginLeft:"150px"}}>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <table>
                                            <tr>
                                                <td><img src={i2} alt="img2"/></td>
                                                <td>
                                                    <h5>Health information</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i3} alt="img3"/></td>
                                                <td>
                                                    <h5>Medical education</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                    <table>
                                            <tr>
                                                <td style={{marginRight:"20px"}}><img src={i5} alt="img5"/></td>
                                                <td>
                                                    <h5>Symptom Check</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                            <tr>
                                                <td><img src={i4} alt="img4"/></td>
                                                <td>
                                                    <h5>Qualified Doctors</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid.</p>
                                                </td>
                                            </tr> <br/>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>               
                    </div>

                </div><br/><br/>
        </>
    )
}
export default VisionMission;