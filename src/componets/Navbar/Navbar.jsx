import { NavLink, useLocation } from "react-router-dom";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className={`mt-3 ${isHomePage ? 'bg-[#9538E2] text-white rounded-t-3xl' : 'bg-white'}`}>
      
      <div className="navbar pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex flex-row gap-3">
          <a className="btn rounded-full">
            <FaCartPlus></FaCartPlus>
          </a>
          <a className="btn rounded-full">
            <FaRegHeart></FaRegHeart>
          </a>
        </div>
      </div>
      {/* navbar starts */}

      {/* banner hero */}

      

      {/* banner hero */}
    </div>
  );
};

export default Navbar;