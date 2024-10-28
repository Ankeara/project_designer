import './navbar.css';
import { Link } from 'react-router-dom';
import { House, Diamond, CircleUser, MoonStar ,Sun } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleMode }) => {
  return (
    <nav className="navbar mt-5">
      <div className="links">
        <Link className="link" to="/">
          <House />
          <span className="popup">Home</span>
        </Link>
        <Link className="link" to="/about">
          <CircleUser />
          <span className="popup">About</span>
        </Link>
        <Link className="link" to="/project">
          <Diamond />
          <span className="popup">Projects</span>
        </Link>
      </div>

      <div className="right_navbar">
       <span className="toggle_mode" onClick={toggleMode}>
          {isDarkMode ? <MoonStar /> : <Sun />} {/* Conditional rendering */}
          <span className="popup">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </span>
        <Link to={"/contact"} className="btn__hire">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ffffff"} fill={"none"}>
                <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 8.5C2.86239 7.67056 3.3189 6.89166 3.85601 6.17677M6.17681 3.85598C6.89168 3.31888 7.67058 2.86239 8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Hire Me 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
