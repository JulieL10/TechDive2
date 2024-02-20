import React from 'react';
import image from '../images/MedReportLogo.png'
import SearchBar from './SearchBar';

   
   const Nav = ({input, setInput}) => {
    return(
        <div className="navbar">

        <div className="logo">
                <img src= {image}alt="Med Report Logo" className="logo" />
                <span className="logo-text"> MedReport</span>
            </div>
        <div>
            <SearchBar input={input} setInput={setInput}/>
        </div>
        <ul>
            <li><a href="/">Exams</a></li>
            <li><a href="/">Admin</a></li>
        </ul>
    </div>
    )
   }
   
   
export default Nav;