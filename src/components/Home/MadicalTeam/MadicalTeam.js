import React from 'react';
import './MadicalTeam.css';

const MadicalTeam = () => {
         return (
                  <div className="container">
                           <div>
                           <h2 className="team-titel ">Our Outstanding Team Is <br /> Active To Help You!</h2>
                           <p className=" team-titel2 text-center">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some form.</p>
                           </div>
                           <div className="row mt-3">
                           <div className="col-lg-3 col-12">
                           <div><img className="w-100" src="https://i.ibb.co/jbwW2Cd/doctor1.jpg" alt="" /></div>
                           <div className="name-container">
                                    <h5 className="doctor-titel">Cardiologist</h5>
                                    <h3 className="doctor-name">Dr.Felica Queen</h3>
                           </div>
                           </div>
                           <div className="col-lg-3 col-12">
                           <div><img className="w-100" src="https://i.ibb.co/4T4th9c/doctor2.jpg" alt="" /></div>
                           <div className="name-container">
                                    <h5 className="doctor-titel">Neurologist</h5>
                                    <h3 className="doctor-name">Dr.Alice Williams</h3>
                           </div>
                           </div>
                           <div className="col-lg-3 col-12">
                           <div><img className="w-100" src="https://i.ibb.co/PCv74Kz/doctor3.jpg" alt="" /></div>
                           <div className="name-container">
                                    <h5 className="doctor-titel">Physician Assistant</h5>
                                    <h3 className="doctor-name">Dr.Paul Flavius</h3>
                           </div>
                           </div>
                           <div className="col-lg-3 col-12">
                           <div><img className="w-100" src="https://i.ibb.co/rvTN9qL/doctor4.jpg" alt="" /></div>
                           <div className="name-container">
                                    <h5 className="doctor-titel">Physician Assistant</h5>
                                    <h3 className="doctor-name">Dr.Michael Bean</h3>
                           </div>
                           </div>
                           </div>
                  </div>
         );
};

export default MadicalTeam;