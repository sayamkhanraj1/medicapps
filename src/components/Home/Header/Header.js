import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.svg'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold">
                    <img
                    alt="logo"
                    src={logo}
                    width="150"
                    className="d-inline-block align-center"
                     />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-dark fs-6 ms-4 fw-bold" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-dark fs-6 ms-4 fw-bold" to="/appointment">Appointment</NavLink>
                            
                            {
                                user.email && <NavLink className="text-decoration-none text-dark fs-6 ms-3 fw-bold" to="/dashbord">Dashbord</NavLink>
                            }
                            {
                                user.email && <span className="fw-bold ms-4 me-1 header-text">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <NavLink onClick={logOut} className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-danger btn-sm" to="/login"><i className="fas fa-sign-in-alt me-2 text-white"></i>LogOut</NavLink>
                                :
                                <NavLink className="text-decoration-none fs-6 ms-3 fw-bold btn service-btn btn-sm" to="/login"><i className="fas fa-sign-in-alt me-2 text-white "></i>Sign In</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;