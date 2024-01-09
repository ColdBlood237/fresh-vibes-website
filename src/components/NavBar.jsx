import { Link } from "react-router-dom";
import App from "../App";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/vote">Vote</Link>
            </li>
            <li>
              <Link to="/#contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-16 h-12 object-cover" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="upload">Upload</Link>
          </li>
          <li>
            <Link to="vote">Vote</Link>
          </li>
          <li>
            <Link to="#contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <a className="btn w-20">Log In</a>
        <a className="btn w-20">Sign In</a>
      </div>
    </div>
  );
}
