import React, { useState } from "react";
import OPS from '../utils/constants';
import { Link } from "react-router-dom";
const Header = () => {
    const [val,setval]=useState("Login");
    const val1="Logout";
    return (
        <div className="header">
         <div className="logo">
           <img className="complogo" src={OPS.LOGO_URL} alt="" />
         </div>
         <div className="nav-items">
          <ul className="nav">
           <Link to={"/"} className="link"><li>Home</li></Link>
           <Link to={"/about"} className="link"><li>About Us</li></Link>
           <Link to={"/contact"} className="link"><li>Contact Us</li></Link>
           <li>Cart</li>
           <button onClick={()=>{
            val === "Login" ? setval("Logout") : setval("Login");
           }} className="btn"><li>{val}</li></button>
          </ul>
         </div>
        </div>
    )
}
export default Header;