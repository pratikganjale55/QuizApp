import React from 'react'
import "./login.css" ;
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContextProvide } from "../AuthCotext/Authcontext" ;

const Login = () => {
  const [login, setLogin] = useState({}) ;
  const navigate = useNavigate() ;
    const {loginSuccess } = useContext(AuthContextProvide) ;
 const handleChange = (e) => {
     const {name, value} = e.target ;
     setLogin({
         ...login,
         [name] : value
     })
 }
 const handleClick = async(e) => {
   let payload = JSON.stringify(login)
   console.log(payload)
      e.preventDefault() ;
     await fetch("https://mernquiz12.herokuapp.com/login", {
         headers : {
           "Content-Type" : "application/json",
          //  'Access-Control-Allow-Credentials': 'true',
          //  "Access-Control-Request-Headers": "X-PINGOTHER"
         },
        //  credentials: 'include',
         method : "POST" ,
         body : payload
      })
      .then((res) => res.json()) 
      .then((data) =>  {
       console.log(data)
         if(data.massage == "wrong Credientals"){
             window.alert("wrong Credientals")
         }else {
           window.alert("Login Successful") ;
           // console.log(data.token)
           localStorage.setItem("token", JSON.stringify(data.token))
           localStorage.setItem("devId", JSON.stringify(data.id))
         let res =   loginSuccess()
           if(res){
             navigate("/")
           }else {
               window.alert("wrong credentials")
           }
           
         }
      })
      .catch((e) => console.log(e))
 }
  return (
    <div className='loginPage'>
      <div className="leftDiv">
        <img src="https://eliteweb.wrteam.in/images/login/login_img.webp" alt="" />

      </div>
      <div class="vl"></div>
      <div className="rightDiv">
      <main class="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 class="h3 mb-3 fw-normal stroke_text registerText"> LOGIN</h1>

            
            <div class="form-floating mt-2">
            <input type="email" class="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Email Address</label>
            </div>
            
            <div class="form-floating mt-2">
            <input type="password" class="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            
            <button class="w-100 btn btn-lg regsiterButton mt-2 " type="submit" onClick={handleClick}>LOGIN</button>
            
        </form>
</main>
      </div>
      
    </div>
  )
}

export default Login
