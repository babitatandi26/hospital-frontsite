import React from "react";
import "./Gallery.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i1 from "../hospitalImages/4.jpg";
import i2 from "../hospitalImages/03.jpg";
import i3 from "../hospitalImages/02.jpg";
import i4 from "../hospitalImages/04.jpg";
import i5 from "../hospitalImages/2.jpg";
import i6 from "../hospitalImages/01.jpg";
import i7 from "../hospitalImages/3.jpg";

const Gallery = () => {
    return(
        <>
            
            <div className="Gallery" style={{marginTop:"50px",textAlign:"center",color:"#fff"}}>
                <h1 style={{color:"black"}}>Gallery</h1><br/><br/>
               
                <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i1} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Your Health</h5>
                                        <p className="card-text">Operation Theatre</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i2} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Procedure</h5>
                                        <p className="card-text">We perfom  latest,cutting edge surgic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i3} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Recreation center</h5>
                                        <p className="card-text">Pathology</p>
                                    </div>
                                </div>
                            </div>
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i4} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Specialities</h5>
                                        <p className="card-text">Operation Theatre</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i5} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Hospitals and Direction</h5>
                                        <p className="card-text">We perfom  latest,cutting edge surgic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i6} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Helth and Wellness</h5>
                                        <p className="card-text">Pathology</p>
                                    </div>
                                </div>
                            </div>
                            </div><br/>

                            <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="card" id="card" style={{width: "20rem",backgroundColor:"#118574"}}>
                                    <img src={i7} className="card-img-top"  alt="..." style={{marginLeft:"0px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#fff"}}>Surgery</h5>
                                        <p className="card-text">Operation Theatre</p>
                                    </div>
                                </div>
                            </div> 
                            </div><br/>

                        </div>
                    </div>
                </div>

        </>
    )
}
export default Gallery;