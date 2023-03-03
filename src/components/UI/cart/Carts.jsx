import React from "react";


import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        
      </ListGroup>
    </div>
  );
};

export default Carts;
