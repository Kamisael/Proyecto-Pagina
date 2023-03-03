import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const featureData = [
 
];

const Home = () => {
  

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    
  }, [category]);

  return (
    <Helmet title="Home">
    </Helmet>
  );
};

export default Home;
