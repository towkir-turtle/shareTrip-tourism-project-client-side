import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  const { user, logOut, signInUsingGoogle } = useAuth();
  return (
    <div>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home">
              <img src={logo} width="180px" heigh="80px" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ms-auto">
              <Link className="nav-item" to="/home">
                Home
              </Link>

              {user.email && (
                <Link className="nav-item" to="/myPackages">
                  My Packages
                </Link>
              )}
              {user.email && (
                <Link className="nav-item" to="/manageAllPackages">
                  Manage All Packages
                </Link>
              )}
              {user.email && (
                <Link className="nav-item" to="/addNewPackage">
                  Add New Package
                </Link>
              )}

              {user.email && (
                <span className="displayName">{user.displayName}</span>
              )}
              {user.email ? (
                <button className="signOutBtn" onClick={logOut}>
                  Sign Out
                </button>
              ) : (
                <Link className="nav-item" to="/login">
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
