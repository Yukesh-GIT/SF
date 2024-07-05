import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu,setMenu] = useState("home")
     onclick={}
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src = {logo} alt=""/>
         </div> 
         <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link to="/">Home</Link>{menu==="home"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Sports")}}><Link to="/Sports">Sports</Link>{menu==="Sports"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Fitness")}}><Link to="/Fitness">Fitness</Link>{menu==="Fitness"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact")}}><Link to="/Contact">Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
         </ul>
         <div className="nav-login-cart">
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Cart"><FontAwesomeIcon icon = {faCartShopping} size='lg'/></Link>
            <div className="nav-cart-count">0</div>
         </div>
    </div>
  )
}

export default Navbar