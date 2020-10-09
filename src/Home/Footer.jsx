import React from "react";
import "./Footer.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import complain from "../hospitalImages/icons8-create-40.png";
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import facebook from "../hospitalImages/icons8-facebook-f-30(1).png";
import twitter from "../hospitalImages/icons8-twitter-30.png";
import google from "../hospitalImages/icons8-google-plus-30.png";
import instagram from "../hospitalImages/icons8-instagram-30.png";
import linkedin from "../hospitalImages/icons8-linkedin-2-30.png";
import pinterest from "../hospitalImages/icons8-pinterest-30.png";
import youtube from "../hospitalImages/icons8-youtube-30.png";
import EditIcon from '@material-ui/icons/Edit';

const Footer = () => {
    return(
        <>
            <div className="footer" style={{color:"#fff",marginBottom:"-50px"}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                        <h3>Follow Us</h3><br/>
                        <div className="icons">
                            <img src={facebook} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={twitter} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={youtube} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={google} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={instagram} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={linkedin} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                            <img src={pinterest} alt="facebook" style={{border:"1px solid white",margin:"5px",padding:"1px"}}/>
                        </div>
                        <br/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                            <h3>Links</h3><br/>

                                <table id="list">
                                    <tr>
                                        <td><li style={{listStyleType:""}}><span>Home</span></li></td>
                                        <td style={{paddingLeft:"100px"}}><li style={{listStyleType:""}}><span>About</span></li></td>
                                    </tr><br/>
                                    <tr>
                                        <td><li style={{listStyleType:""}}><span>Academics</span></li></td>
                                        <td style={{paddingLeft:"100px"}}><li style={{listStyleType:""}}><span>Events</span></li></td>
                                    </tr><br/>
                                    <tr>
                                        <td><li style={{listStyleType:""}}><span>Gallery</span></li></td>
                                        <td style={{paddingLeft:"100px"}}><li style={{listStyleType:""}}><span>Contact Us</span></li></td>
                                    </tr><br/>
                                </table>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12" style={{color:"#fff",marginTop:"20px"}}>
                                <h3>Feedback</h3><br/>
                                <div style={{display:"flex"}}>
                                    {/* <img src={complain} alt="" style={{border:"1px solid white"}}/> */}
                                <EditIcon style={{border:"1px solid white",color:"#0d6659",backgroundColor:"#fff",borderRadius:"5px"}}/>
                                <p style={{marginLeft:"20px"}}> Complain</p>
                                </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12"  style={{display:"flex"}}>
                                                 <CallIcon/>
                                            <div style={{marginLeft:"10px"}}>
                                                <p>9999955555</p>
                                            </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12" style={{display:"flex"}}>
                                                <MailIcon/>
                                                <div style={{marginLeft:"10px"}}>
                                                <p>smarthospitalrc@gmail.com</p>
                                            </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12"  style={{display:"flex"}}>
                                            <RoomIcon/>
                                            <div style={{marginLeft:"10px"}}>
                                                <p>25 Kings Street, CA</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
                <div className="col-lg-12 col-md-12 col-12" style={{backgroundColor:"rgba(0,0,0,0.2)",textAlign:"center",padding:"10px",width:"100%"}}>
                    <p style={{marginTop:"12px"}}>© Smart Hospital & Research Center 2020 All rights reserved</p>
                </div>
            </div><br/><br/>
        </>
    )
}
export default Footer;