import React from "react";
import "./Department.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import medicine from "../hospitalImages/icons8-pills-100(1).png";
import doctor from "../hospitalImages/icons8-medical-doctor-100(1).png";
import ambulance from "../hospitalImages/icons8-ambulance-100(1).png";
import stethescope from "../hospitalImages/icons8-stethoscope-100(1).png";
import { Button } from "@material-ui/core";

const Departments = () => {
    return(
        <>
             <div className="Departments" style={{marginTop:"50px",marginBottom:"100px",textAlign:"center"}}>
                <h1>Departments</h1>
                <p style={{textAlign:"center",marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna.</p><br/><br/>

                <div className="cards" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={medicine} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Emergency Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={doctor} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">ENT Department</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={stethescope} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Eye Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={medicine} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Emergency Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={doctor} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">ENT Department</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={stethescope} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Eye Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={medicine} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Emergency Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={doctor} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">ENT Department</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",marginBottom:"50px"}}>
                                    <img src={stethescope} className="card-img-top" height="170px" width="170px" alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Eye Care</h5>
                                        <p className="card-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                        <Button style={{backgroundColor:"#0d6659",color:"#fff"}}>BOOK APPOINTMENT</Button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div> 
        </>
    )
}
export default Departments;