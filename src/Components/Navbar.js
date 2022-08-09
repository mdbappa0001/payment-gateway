import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li className='text-[#D1AB71] font-bold lg:ml-96'><Link to="/">Home</Link></li>
        <li className='text-[#D1AB71] font-bold'><Link to="/dashboard">DashBoard</Link></li>
    </>

    return (
        <>
            <div className="navbar bg-blue sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <p className='text-xl lg:text-3xl ml-24'>Anaitic.com</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ml-96">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Navbar;