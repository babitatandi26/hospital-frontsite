import React from 'react';
import './App.css';
import Home from './Home/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Appointment from './Appointment/Appointment';
import AboutUs from './AboutUs/AboutUs';
import Gallery from './Gallery/Gallery';
import Events from './Events/Events';
import ContactUs from './ContactUs/ContactUs';
import NoticeBar from './Home/NoticeBar';
import NavBar from './Home/Navbar';
import Typography from '@material-ui/core/Typography';
import Footer from './Home/Footer';
import VisionMission from './AboutUs/VissionMission';
import DoctorsList from './AboutUs/DoctorsList';
import Faq from './AboutUs/Faq';
import Departments from './AboutUs/Departments';
import Testimonials from './AboutUs/Testimonials';
import Cardiologist from "./AboutUs/Cardiologist";

function App() {
  return (
    <>
     <div className="App">
     <Router>
      <div className="Layout" style={{backgroundColor:"#eee"}}>
      <div style={{height:"36px",width:"100%",backgroundColor:"#eee"}}>
          <NoticeBar/>
      </div>
      <div style={{width:"100%",backgroundColor:"#fff",position:"sticky",top: "0px",zIndex:"100"}}>
        <NavBar/>
      </div>
      <Typography style={{backgroundColor:"#eee"}}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/appointment" component={Appointment}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/about-us" component={AboutUs}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route exact path="/contact-us" component={ContactUs}/>
              <Route exact path="/vision-mission" component={VisionMission}/>
              <Route exact path="/doctors" component={DoctorsList}/>
              <Route exact path="/doctors/car" component={Cardiologist}/>
              <Route exact path="/faq" component={Faq}/>
              <Route exact path="/departments" component={Departments}/>
              <Route exact path="/testimonials" component={Testimonials}/>
          </Switch>
      </Typography>
      <div style={{backgroundColor:"#118574"}}>
            <Footer/>
      </div>
      </div>
    </Router>
     </div>
    </>
  );
}

export default App;
