import React from "react";
import "./FeaturedServices.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import medicine from "../hospitalImages/icons8-pills-100(1).png";
import doctor from "../hospitalImages/icons8-medical-doctor-100(1).png";
import ambulance from "../hospitalImages/icons8-ambulance-100(1).png";
import stethescope from "../hospitalImages/icons8-stethoscope-100(1).png";

const FeaturedServices = () => {
    return(
        <>
            <div className="featuredServices" style={{backgroundColor:"#eee"}}>
                <h1>Featured Services</h1>
                <p>We cover a big variety of medical services</p><br/><br/>

                <div className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card" id="card" style={{width: "16rem"}}>
                                    <img src={medicine} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical Treatment</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={ambulance} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical Treatment</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={doctor} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical Treatment</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                            <div className="card" style={{width: "16rem"}}>
                                    <img src={stethescope} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Medical Treatment</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
export default FeaturedServices;