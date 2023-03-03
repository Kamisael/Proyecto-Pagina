import React from "react";
import { ListGroupItem } from "reactstrap";



const CartItem = ({ item }) => {


 

  const incrementItem = () => {
    
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
     
    </ListGroupItem>
  );
};

export default CartItem;
