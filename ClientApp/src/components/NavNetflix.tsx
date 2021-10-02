import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import './NavNetflix.css';

const NavNetflix: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShowNav(false);
    } else {
      setShowNav(true);
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
      className={`navnetflix py-0 justify-content-between bg-netflix-dark ${!showNav && 'bg-transparent'}`}
    >

      <NavbarBrand tag={Link} to="/" className="py-0">
        <img src="580b57fcd9996e24bc43c529.png" height="50" alt="" />
      </NavbarBrand>

      <NavLink href="/" className="py-0">
        <img src="hBEe3tdn_400x400.png" height="40" alt="" />
      </NavLink>

    </Navbar>
  );
};

export default NavNetflix;
