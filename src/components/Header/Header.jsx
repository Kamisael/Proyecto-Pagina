import React, { useRef, useEffect, useState } from "react";


import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";



import "../../styles/header.css";

const nav__links = [
  {
    display: "Pagina libre",
    path: "/home",
  },
  {
    display: "Pagina privada 1",
    path: "/foods",
  },
  {
    display: "Pagina privada 2",
    path: "/cart",
  },
  
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  
  

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

 
  

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <img src={logo} alt='logo' width='150' />

          {/* ======= menu ======= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5'>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
              
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='user'>
              <Link to='/login'>
                <i class='ri-user-line'></i>
              </Link>
            </span>

            
          </div>
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
