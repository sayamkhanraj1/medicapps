import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/LoginRegister/Login/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
