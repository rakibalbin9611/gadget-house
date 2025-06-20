// src/Components/Navbar/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";

const Navbar = ({ isDashboard }) => {
  /* dynamic bg & text */
  const navBg = isDashboard ? "bg-white" : "bg-purple-600";
  const navText = isDashboard ? "text-purple-600" : "text-white";

  /* helper to give same color to links */
  const linkClass = "px-3 py-1 hover:underline " + navText;

  const links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={linkClass}>
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className={`navbar  lg:px-8 ${navBg} ${navText}`}>
      {/* ------------ LEFT ------------ */}
      <div className="navbar-start">
        {/* mobile burger */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </label>

          {/* mobile dropdown */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${navBg} ${navText}`}
          >
            {links}
          </ul>
        </div>

        {/* brand button */}
        <Link to="/">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-[0_4px_20px_rgba(139,92,246,0.6)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.7)] transition">
            Gadget House
          </button>
        </Link>
      </div>

      {/* ------------ CENTER (desktop links) ------------ */}
      <div className="navbar-center hidden lg:flex font-medium">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* ------------ RIGHT ------------ */}
      <div className="navbar-end gap-4">
        <Link
          to="/dashboard"
          className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          <FaCartArrowDown
            className={isDashboard ? "text-purple-600" : "text-[#3A3A3A]"}
          />
        </Link>

        <Link
          to="/dashboard"
          className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          <FaHeart
            className={isDashboard ? "text-purple-600" : "text-[#3A3A3A]"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
