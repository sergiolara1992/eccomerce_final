import React from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
         <div>
                <Outlet />
            </div>


            <div className='bg-white '>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/home" ><i className="fa-solid fa-house-chimney divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/search" ><i className="fa-solid fa-magnifying-glass divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/orders" ><i className="fa-solid fa-clock-rotate-left divNav__icon w-5 focus:pointer-events-auto"></i></Link>
                <Link className='ml-20  hover:bg-yellow-400 ' to="/app/profile" ><i className="fa-regular fa-user divNav__icon w-5 focus:pointer-events-auto"></i></Link>
            </div>

           
        </>
    );
};

export default Layout;






