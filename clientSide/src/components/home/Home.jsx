import React from 'react' ;
import { useNavigate } from 'react-router';
import "./home.css" ;


const Home = () => {
  const navigate = useNavigate() ;
  const handleClick = () => {
      navigate("/quiz")
  }
  
  return (
    <div className='homeContainer'>
      <div className='homeLeftDiv'>
        <img src="https://elitequiz.wrteam.in/images/slider/1651661106.png" style={{width : "45%"}} alt="" />
      </div>
      <div className='homeRightDiv'>
           <p className='stroke_text1' >WELCOME </p>
           <p className='text'>Let's Start <span className='stroke_text1'>Quiz</span>  Here</p> 
           <button class="w-50 btn btn-lg regsiterButton mt-2 " type="submit" onClick={handleClick}>START QUIZ</button>
           <button class="w-50 btn btn-lg regsiterButton2 mt-2 " type="submit" onClick={handleClick}>ADMIN PANEL</button>
      </div>
    </div>
  )
}

export default Home
