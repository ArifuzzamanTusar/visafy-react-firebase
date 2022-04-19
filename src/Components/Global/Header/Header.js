import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Customlink from '../../utilities/Customlink';

const Header = () => {
    const [user] = useAuthState(auth);
   

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container className=''>
                <Navbar.Brand >
                    <Customlink to={'/'}> <img width={150} src='https://res.cloudinary.com/tusar/image/upload/v1650363759/visafy_u6wgs8.png' alt="" /> </Customlink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Customlink to={'/'}>Home</Customlink>
                        <Customlink to={'/blogs'}>Blogs</Customlink>
                        <Customlink to={'/about'}>About</Customlink>

                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='btn btn-danger' onClick={() => handleSignOut()} >Log Out </button>
                                :
                                <Customlink className='btn btn-light' to={'/login'}>Login</Customlink>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;