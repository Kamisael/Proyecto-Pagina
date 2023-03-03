import React, { useState, useEffect } from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");

  const relatedProduct = products.filter();

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        
      })
    );
  };

  const submitHandler = (e) => {
  
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    
  }, []);

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

    </Helmet>
  );
};

export default FoodDetails;