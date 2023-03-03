import React, { useRef, useEffect } from "react";



import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

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
    path: "/contact",
  },
];

const Header = () => {
  

  

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
    <header className="header" ref={headerRef}>
      
    </header>
  );
};

export default Header;
