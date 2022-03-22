import React from 'react';
import Banner from '../Banner/Banner';
import BookAppointment from '../BookAppointment/BookAppointment';
import Cardiology from '../Cardiology/Cardiology';
import Footer from '../Footer/Footer';
import MadicalTeam from '../MadicalTeam/MadicalTeam';
import MoreAbout from '../MoreAbout/MoreAbout';
import News from '../News/News';
import PricingPlan from '../PricingPlan/PricingPlan';

const Home = () => {
         return (
                  <div>
                           <Banner />
                           <BookAppointment />
                           <MoreAbout />
                           <Cardiology />
                           <MadicalTeam />
                           {/* {<News />} */}
                           <PricingPlan />
                           <Footer />
                  </div>
         );
};

export default Home;