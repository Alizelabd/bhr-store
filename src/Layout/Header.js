import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import cartimg from '../images/cart.png';
function Header() {
    const cart = useSelector((state) => state.cart);

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container fluid>
                <Link to="/" className="navbar-brand flex-fill">Online Store</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '125px' }}
                        navbarScroll
                    >
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/store'} className="nav-link">Store</Link>
                        <div className="position-relative">
                            <Link to={`/Cart`} className="btn btn-warning"><img style={{ width: '25px' }} src={cartimg} alt='cart' /></Link>
                            <span className='notic'>{cart.length}</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;