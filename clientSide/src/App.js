
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/home/Home.jsx"
import Admin from "./components/admin/Admin.jsx" ;
import Quiz from "./components/quiz/Quiz.jsx" ;
import Login from "./components/login/Login.jsx" ;
import Register from "./components/register/Register.jsx" ;
import PrivateContext from './components/AuthCotext/PrivateContext';



function App() {

  return (
  <>
  <div className='App'>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/admin" element={
        
          <Admin/>
       
       }/>
       <Route path="/quiz" element={
        
          <Quiz/>
        
       
       }/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
    </Routes>
     
  </div>

    
  
  </>

  );
}

export default App;

