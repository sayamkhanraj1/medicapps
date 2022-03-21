import React from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
         return (
                  <div className="container mt-5 mb-5">
                           <div className="row">
                           <div className="col-lg-6 col-12"> 
                                    <h2 className="appointment-titel">Book An Appointment</h2>
                                    <p className="appointment-titel2">Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.</p>
                           </div>
                           </div>
                           <div className="row">
                           <div className="col-lg-3 col-md-6 col-12 appointment-input">
                             <input type="text" name="name" placeholder="Your Name" /> 
                           </div>
                           <div className="col-lg-3 col-md-6 col-12 appointment-input">
                             <input type="text" name="email" placeholder="Your Email" /> 
                           </div>
                           <div className="col-lg-3 col-md-6 col-12 appointment-input">
                             <input type="text" name="name" placeholder="Department" />  
                           </div>
                           
                           <div className="col-lg-3 col-md-6 col-12">
                              <button className="appointment-btn">Get Appointment</button>
                           </div>


                           </div>
                  </div>
         );
};

export default BookAppointment;