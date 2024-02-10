import Navbar from 'react-bootstrap/Navbar';
   const Nav = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand to="/">Your App Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link to="/App.js">Home</Nav.Link>
                <Nav.Link to="/about">About</Nav.Link>
                <Nav.Link to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
   }
   
   
export default Nav;