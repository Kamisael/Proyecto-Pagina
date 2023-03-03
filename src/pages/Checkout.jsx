import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {
  
  const [postalCode, setPostalCode] = useState("");

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
    
    };
  
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      
    </Helmet>
  );
};

export default Checkout;
