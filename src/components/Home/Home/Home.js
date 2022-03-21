import React from 'react';
import Banner from '../Banner/Banner';
import BookAppointment from '../BookAppointment/BookAppointment';
import Cardiology from '../Cardiology/Cardiology';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoreAbout from '../MoreAbout/MoreAbout';

const Home = () => {
         return (
                  <div>
                           <Header/>
                           <Banner />
                           <BookAppointment />
                           <MoreAbout />
                           <Cardiology />
                           <Footer />
                  </div>
         );
};

export default Home;