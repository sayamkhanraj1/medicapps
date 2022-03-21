import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h2 className="banner-heading1">Find A Doctor & Book Appointment</h2>
                           <p className="banner-heading">Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities medicals service by Medicapps.</p>
                           <button className="banner-btn ">Book Appointment</button>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="d-block w-100 p-3"
                           height="700"
                           src="https://i.ibb.co/ZXjQnPb/slider-2.png"
                           alt="first slide"
                           />
                           </div>
                    </div>
                  </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h2 className="banner-heading1">World class care right where you need it </h2>
                           <p className="banner-heading">Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities medicals service by Medicapps.</p>
                           <button className="banner-btn">Book Appointment</button>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="d-block w-100 p-3"
                           height="700"
                           src="https://i.ibb.co/16FLjqN/02.png"
                           alt="second slide"
                           />
                           </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h3 className="banner-heading1">Smart Products</h3>
                           <p className="banner-heading">Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities medicals service by Medicapps.</p>
                           <button className="banner-btn">Book Appointment</button>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="d-block w-100 p-3"
                           height="700"
                           src="https://i.ibb.co/r21rZxc/slider-3.png"
                           alt="third slide"
                           />
                           </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;