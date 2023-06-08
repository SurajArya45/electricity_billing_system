import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/customer/register';
import Login from './components/Login/login'; 
import Navbar from './components/navbar/navbar';
import CustomerDashboard from './components/customer/customerDashboard';
import AdminDashboard from './components/admin/adminDashboard';
function App() {

  
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Register/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/CustomerDashboard' element = {<CustomerDashboard/>}/>
          <Route path='/AdminDashboard' element = {<AdminDashboard/>}/>
        </Routes>
   

    

    </div>
  );
}

export default App;
