import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { FaCircleInfo } from "react-icons/fa6"; 
const Container = () => {
    return (
        <div>
            
            <div id='link'>
                <Link to={"/home"} className='link'> <IoHome /> HOME</Link>
                <Link to={"/coursedetails"} className='link'> <FaBook /> COURSEDETAILS</Link>
                <Link to={"/regestration"} className='link'> <SiGoogleforms /> REGESTRATION</Link>
                <Link to={"/fetchdetails"} className='link'> <FaCircleInfo /> DETAILS</Link>
            </div>

           
            <div>
                {<Outlet></Outlet>}
            </div>
            
        </div>
    )
}

export default Container