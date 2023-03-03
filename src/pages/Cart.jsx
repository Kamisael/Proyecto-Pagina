import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  return (
    <Helmet title="Cart">
      <CommonSection title="Tu" />
      
    </Helmet>
  );
};

const Tr = (props) => {
 
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      
    </tr>
  );
};

export default Cart;
