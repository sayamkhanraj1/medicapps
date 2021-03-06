import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/DashBord/AddProduct/AddProduct';
import DashBord from './components/DashBord/DashBord/DashBord';
import MakeAdmin from './components/DashBord/MakeAdmin/MakeAdmin';
import Payment from './components/DashBord/Payment/Payment';
import Review from './components/DashBord/Review/Review';
import Error from './components/Error/Error';
import BookAppointment from './components/Home/BookAppointment/BookAppointment';
import Home from './components/Home/Home/Home';
import PricingPlan from './components/Home/PricingPlan/PricingPlan';
import Login from './components/LoginRegister/Login/Login';
import PrivateRoute from './components/LoginRegister/PrivateRoute/PrivateRoute';
import Header from './components/Home/Header/Header'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/appointment" element={<BookAppointment/>} />
        <Route path="/priceing" element={<PricingPlan/>} />
        <Route path="/dashbord" element={<PrivateRoute><DashBord/></PrivateRoute>}>      
              <Route path={`/dashbord/makeAdmin`} element={<MakeAdmin></MakeAdmin>} />                  
              <Route path={`/dashbord/addproduct`} element={ <AddProduct />} /> 
              <Route path={`/dashbord/review`} element={ <Review /> } />
          <Route path={`/dashbord/pay`} element={<Payment />} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
