
import { Link, NavLink } from "react-router-dom";

import { TbUserCircle } from "react-icons/tb";


const Header = () => {

    const links = <>
                <li> <NavLink to={"/"} >Home</NavLink> </li>
                <li> <NavLink to={"/addcoffee"} >Add New Coffee</NavLink> </li> 
                <li> <NavLink to={"/signup"} >Signup</NavLink> </li> 
                <li> <NavLink to={"/users"} >Users</NavLink> </li> 

            </>

    

    return (
      <div className="flex items-center justify-between px-4 lg:px-[5%] py-3 bg-[#f3ebd4] shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            aria-label="Open navigation menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-100 rounded-box z-[1] mt-2 w-52 p-3 shadow-lg"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <p className="font-extrabold text-xl md:text-2xl text-gray-800 pl-4 lg:pl-0">
        Espresso Emporium
        </p>
      </div>
    
      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 text-base font-semibold text-gray-700">
          {links}
        </ul>
      </div>
    
      {/* Navbar End (Login Button) */}
      <div className="navbar-end flex justify-end">
        <Link
          to={"/login"}
          className="btn border-none bg-teal-400 hover:bg-sky-400 text-white font-semibold px-6 py-2 rounded-md duration-300 ease-in-out transform hover:scale-90 " > Login
        </Link>
      </div>
    </div>
    );
};

export default Header;