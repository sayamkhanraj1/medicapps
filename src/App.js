import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/DashBord/AddProduct/AddProduct';
import DashBord from './components/DashBord/DashBord/DashBord';
import MakeAdmin from './components/DashBord/MakeAdmin/MakeAdmin';
import ManegeAllProducts from './components/DashBord/ManegeAllOrders/ManegeAllProducts';
import Payment from './components/DashBord/Payment/Payment';
import Review from './components/DashBord/Review/Review';
import Error from './components/Error/Error';
import BookAppointment from './components/Home/BookAppointment/BookAppointment';
import Home from './components/Home/Home/Home';
import Login from './components/LoginRegister/Login/Login';
import PrivateRoute from './components/LoginRegister/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/appointment" element={<BookAppointment/>} />
        <Route path="/dashbord" element={<PrivateRoute><DashBord/></PrivateRoute>}>      
              <Route path={`/dashbord/makeAdmin`} element={<MakeAdmin></MakeAdmin>} />                  
              <Route path={`/dashbord/addproduct`} element={ <AddProduct />} /> 
   
              <Route path={`/dashbord/manageAllOrders`} element={ <ManegeAllProducts /> } />
                     
              <Route path={`/dashbord/review`} element={ <Review /> } />
   
          <Route path={`/dashbord/pay`} element={<Payment />} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
