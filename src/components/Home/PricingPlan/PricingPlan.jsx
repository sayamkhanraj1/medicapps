import React from 'react';
import './PricingPlan.css'

const PricingPlan = () => {
         return (
                  <div className="container mt-4">
                           <div>
                                    <h2 className="team-titel">Pricing Plan</h2>
                                    <p className="team-titel2 text-center">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some form.</p>
                           </div>
                         <div className="row">
                                  <div className="col-lg-4 col-12 col-md-6">
                                    <div className="single-table">
                                    <div className="table-head">
                                    <h4 className="titel">Basic</h4>
                                    </div>
                                    <h2>$45 <span className="duration">/ Monthly</span></h2>
                                    <ul className="table-list">
                                             <il className="table-list1">Routine Checkup</il>
                                             <il  className="table-list1">24Th Assisance</il>
                                             <il  className="table-list1">100 Text & Treatments</il>
                                             <il  className="table-list1">Regular Health Checkups</il>
                                    </ul>
                                    <button className="appointment-btn">Make Payment</button>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-12 col-md-6">
                                    <div className="single-table">
                                    <div className="table-head">
                                    <h4 className="titel">Advance</h4>
                                    </div>
                                    <h2>$204 <span className="duration">/ Monthly</span></h2>
                                    <ul className="table-list">
                                             <il className="table-list1">Routine Checkup</il>
                                             <il  className="table-list1">24Th Assisance</il>
                                             <il  className="table-list1">100 Text & Treatments</il>
                                             <il  className="table-list1">Regular Health Checkups</il>
                                    </ul>
                                    <button className="appointment-btn">Make Payment</button>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-12 col-md-6">
                                    <div className="single-table">
                                    <div className="table-head">
                                    <h4 className="titel">Premium</h4>
                                    </div>
                                    <h2>$355<span className="duration">/ Yearly</span></h2>
                                    <ul className="table-list">
                                             <il className="table-list1">Routine Checkup</il>
                                             <il  className="table-list1">24Th Assisance</il>
                                             <il  className="table-list1">100 Text & Treatments</il>
                                             <il  className="table-list1">Regular Health Checkups</il>
                                    </ul>
                                    <button className="appointment-btn">Make Payment</button>
                                    </div>
                                  </div>
                                  </div>  
                  </div>
         );
};

export default PricingPlan;