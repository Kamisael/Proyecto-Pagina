import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import { ButtonGroup, Button } from "rsuite";
// Default CSS
import "rsuite/dist/rsuite.min.css";
import RestaurantCard from "../components/UI/product-card/RestaurantCard";



const Restaurantes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="Comidas"/>
      <section>
        <Container>
          <Row>
          
          <div className="App" style={{ textAlign: "center" }}>
            
  
            
  
            <br />
            {/* Button Group 2 - Large in Size*/}
            <ButtonGroup size="lg" style={{ marginTop: "20px",  'background-color': '#ff0000' }}>
            
                <Button color="red" appearance="primary">
                    Mas Cercanos</Button>
                <Button color="red" appearance="primary">
                    Mejor Calificacion</Button>
                <Button color="red" appearance="primary">
                    Envio Gratis</Button>
                <Button color="red" appearance="primary">
                    Ofertas Del Dia</Button>
            </ButtonGroup>
  
        </div>
            
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <RestaurantCard item={item} />
              </Col>
              
            ))}
            

            
          </Row>
        </Container>
      </section>
      
    </Helmet>
  );
};

export default Restaurantes;