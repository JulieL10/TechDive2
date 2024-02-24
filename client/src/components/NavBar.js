import React from 'react';
import image from '../images/MedReportLogo.png';
import SearchBar from './SearchBar';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ input, setInput }) => {
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <img src={image} alt="Med Report Logo" className="logo" />
        <span className="logo-text"> MedReport</span>
      </div>
      {pathname !== "/create-exam" && (
        <div>
          <SearchBar input={input} setInput={setInput} />
        </div>
      )}
      <ul>
        <li><Link to="/">Exams</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        {pathname === "/admin" && (
          <li><Link to="/create-exam">Create Exam</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
