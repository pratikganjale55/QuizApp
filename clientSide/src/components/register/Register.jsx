import React, { useState } from 'react' ;
import { Navigate, useNavigate } from 'react-router';
import "./register.css" ;

const Register = () => {
  const [text, setText] = useState({}) ;
  const navigate = useNavigate() ;

  const handleChange = (e) => {
        const {name, value} = e.target ;
        setText({
           ...text ,
           [name] : value
        })
  }

  const handleSubmit = (e) => {
           e.preventDefault() ;
           let payload = JSON.stringify(text) ;
          //  axios.post("http://localhost:5000/register", payload) 
          //  .then((res) => console.log(res.data))
          //  .catch((e) =>  console.log(e))

          fetch("https://mighty-hollows-94981.herokuapp.com/register", {
            headers : {
              "access-control-allow-origin" : "*",
              "access-control-allow-headers":  "*",
              "access-control-allow-methods" : "*" ,

                "Content-Type" : "application/json"
            },
            method : "POST" ,
            body : payload
          })
          .then((res) => res.json())
          .then((data) => {
            alert("Register Successfull")
            navigate("/login")
          })
          .catch((e) => {
            navigate("/login")
            console.log(e)})
           
  }
  return (
    <div>
      <div className='registerPage'>
      <div className="leftRegDiv">
        <img src="https://eliteweb.wrteam.in/images/login/login_img.webp" alt="" />

      </div>
      <div class="vl"></div>
      <div className="rightRegDiv">
      

      <main class="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 class="h3 mb-3 fw-normal stroke_text registerText"> REGISTER</h1>

            <div class="form-floating mt-3">
            <input type="text" class="form-control registerInput" id="floatingInput" name="name" onChange={handleChange} placeholder="Enter name"/>
            <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mt-2">
            <input type="email" class="form-control registerInput" id="floatingPassword" name="email" onChange={handleChange} placeholder="Enter email address"/>
            <label for="floatingPassword">Email Address</label>
            </div>
            <div class="form-floating mt-2">
            <input type="text" class="form-control registerInput" id="floatingPassword" name="phone" onChange={handleChange} placeholder="Enter phone number"/>
            <label for="floatingPassword"> Phone Number</label>
            </div>
            <div class="form-floating mt-2">
            <input type="text" class="form-control registerInput" id="floatingPassword" name="work" onChange={handleChange} placeholder="Work"/>
            <label for="floatingPassword"> Work</label>
            </div>
            <div class="form-floating mt-2">
            <input type="password" class="form-control registerInput" id="floatingPassword" name="password" onChange={handleChange} placeholder="Enter password"/>
            <label for="floatingPassword"> Password</label>
            </div>
            <div class="form-floating mt-2">
            <input type="password" class="form-control registerInput" id="floatingPassword" name="cpassword" onChange={handleChange} placeholder="Re-Enter password"/>
            <label for="floatingPassword">Confirmed Password</label>
            </div>

            
            <button class="w-100 btn btn-lg  regsiterButton mt-2 " type="submit" onClick={handleSubmit}>REGISTER</button>
            
        </form>
</main>

      </div>
      
    </div>
    </div>
  )
}

export default Register
