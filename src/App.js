import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/customer/register';
import Login from './components/Login/login'; 
import Navbar from './components/navbar/navbar';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element = {<Register/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes>
   

    

    </div>
  );
}

export default App;
