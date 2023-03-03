import React from "react";

import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
      
      })
    );
  };

  return (
    <div className="product__item">
      

     
       
    </div>
  );
};

export default ProductCard;
