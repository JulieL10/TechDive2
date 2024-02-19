import medReportLogo from '../images/MedReportLogo.png';

   
   const Nav = () => {
    return(
        <div className="navbar">

        <div className="logo">
                <img src= {medReportLogo}alt="Med Report Logo" className="logo" />
                <span className="logo-text"> MedReport</span>
            </div>
        <ul>
            <li><a href="/">Exams</a></li>
            <li><a href="/">Admin</a></li>
        </ul>
        <input></input>
    </div>
    )
   }
   
   
export default Nav;