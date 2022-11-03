import React from 'react' ;
import { Link } from 'react-router-dom';
import "./navbar.css" ;

const Navbar = () => {
  return (
    <>
    <div className='navbar_main'>
        <div>
           <img src="https://www.pngmart.com/files/19/Quiz-Logo-Transparent-Background.png" style={{ width : "5.5rem", height: "5.5rem"}}/>
        </div>
        <div >
          <ul className='header_menu'>
            <Link to="/"><li className='link'>Home</li></Link>
            <Link to="/admin" ><li className='link'>Admin</li></Link>
            <Link to="/quiz"><li className='link'>Quiz</li></Link>
            <Link to="/login"><li className='link'>Login</li></Link>
            <Link to="/register"><li className='link'>Register</li></Link>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
