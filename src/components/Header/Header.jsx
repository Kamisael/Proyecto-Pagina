import React, { useRef, useEffect, useState } from "react";


import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import Chat2 from "../UI/cart/Chat2";
import "../../styles/header.css";

const nav__links = [
  {
    display: "HOME",
    path: "/home",
  },
  {
    display: "COMIDAS",
    path: "/foods",
  },
  {
    display: "CARRITO",
    path: "/cart",
  },
  {
    display: "MAPA",
    path: "/mapa",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const [showChat, setShowChat] = useState(false); // Estado para controlar la visibilidad de Chat2

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

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
              <button onClick={() => setShowChat(!showChat)}className="chat-text">CHAT</button>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon' onClick={toggleCart}>
              <i class='ri-shopping-basket-line'></i>
              <span className='cart__badge'>{totalQuantity}</span>
            </span>

            <span className='user'>
              <Link to='/login'>
                <i class='ri-user-line'></i>
              </Link>
            </span>

            <span className='mobile__menu' onClick={toggleMenu}>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
        {/* Mostrar Chat2 si showChat es verdadero */}
        {showChat && <Chat2 />}
      </Container>
    </header>
  );
};

export default Header;
