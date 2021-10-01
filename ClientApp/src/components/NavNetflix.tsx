import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, NavLink } from "reactstrap";
import './NavNetflix.css';

const NavNetflix = () => {
  const [show, handleShow] = useState(false);
  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      fixed="top"
      className={`navnetflix py-0 ${show && 'bg-netflix-dark'}`}
    >
      <Container>
        <NavbarBrand tag={Link} to="/" className="py-0">
          <img src="580b57fcd9996e24bc43c529.png" height="60" alt="" />
        </NavbarBrand>

        <NavLink href="/" className="py-0">
          <img src="hBEe3tdn_400x400.png" height="40" alt="" />
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavNetflix;
