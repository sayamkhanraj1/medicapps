import React from 'react';
import './MoreAbout.css'

const MoreAbout = () => {
         return (
                  <div className="container mt-5">
                           <div className="row">
                                    <div className="col-lg-6 col-12">
                                             <img className="w-75" src="https://i.ibb.co/mtyNMpp/about.png" alt="About More" />
                                    </div>
                                    <div className="col-lg-6 col-12">
                                             <div>
                                             <h2 className="About-titel">Thousands Of Specialities For Any Type Diagnostic.</h2>
                                             <p className="about-titel2">
                                             A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments.
                                             </p>
                                             </div>
                                             <div className="row">
                                             <div className="col-lg-6">
                                             <ul className="list">
                                                      <i class="fa-solid fa-square-check"></i><li>Conducts eye health checkups</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Best lasik treatment</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Treats minor illnesses</li>
                                                      </ul>
                                             </div>
                                             <div className="col-lg-6">
                                             <ul className="list">
                                                      <i class="fa-solid fa-square-check"></i><li>Special eye exam</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Contact lens service</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Special Retina exam</li>
                                                      </ul>
                                             </div>
                                             <div>
                                                      <button className="appointment-btn">More About Us </button>
                                             </div>
                                             </div>
                                             
                                    </div>
                           </div>
                  </div>
         );
};

export default MoreAbout;