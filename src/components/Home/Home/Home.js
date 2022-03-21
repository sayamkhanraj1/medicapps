import React from 'react';
import Banner from '../Banner/Banner';
import BookAppointment from '../BookAppointment/BookAppointment';
import Header from '../Header/Header';

const Home = () => {
         return (
                  <div>
                           <Header/>
                           <Banner />
                           <BookAppointment />
                  </div>
         );
};

export default Home;