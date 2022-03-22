import React from 'react';
import './Cardiology.css'

const Cardiology = () => {
         return (
                  <div className="container my-5">
                           <div className="row">
                                    <div className="col-lg-6 col-12">
                                    <div>
                                             <h2 className="About-titel">Cardiology</h2>
                                             <p className="about-titel2">
                                             A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments.
                                             </p>
                                             </div> 
                                             <div className="col-lg-6">
                                             <ul className="list">
                                                      <i class="fa-solid fa-square-check"></i><li>Get the oars in the water and start rowing</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Introspection is the trick.</li>
                                                      <i class="fa-solid fa-square-check"></i><li>Most people believe that success is difficult.</li>
                                                      </ul>
                                             </div>  
                                             <div>
                                                      <button className="appointment-btn">View Speciality </button>
                                             </div> 
                                    </div>
                                    <div className="col-lg-6 col-12">
                                    <img className="w-75" src="https://i.ibb.co/QHj2GfP/image1.jpg" alt="" />
                                    </div>
                           </div>
                  </div>
         );
};

export default Cardiology;