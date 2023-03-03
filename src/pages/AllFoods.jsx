import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";



import "../styles/all-foods.css";
import "../styles/pagination.css";
import RestaurantCard from "../components/UI/product-card/RestaurantCard";

const AllFoods = () => {
  

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {

  }, []);

 

  const searchedProduct = products.filter((item) => {
    
  });



  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Restaurante">
      <CommonSection title="Comidas" />

      <section>
        <Container>

        </Container>

        <Container>
          <Row>


          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
