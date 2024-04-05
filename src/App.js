import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from  'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import axios from 'axios';

axios.defaults.baseURL= "http://localhost:8000";
axios.defaults.withCredentials = true;


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
      
    </>
  );
}

export default App;
