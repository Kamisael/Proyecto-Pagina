import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";

import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

const Cart = () => {

  return (
    <Helmet title='Cart'>
      <CommonSection title='Tu' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
               
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Titulo Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  
                </table>
              

              <div className='mt-4'>
                <h6>
                  Subtotal: $
                  
                </h6>
                <p>
                  Los impuestos y el envío se calcularán al finalizar la compra.
                </p>
                <div className='cart__page-btn'>
                  <button className='addTOCart__btn me-4'>
                    <Link to='/foods'>Continuar Comprando</Link>
                  </button>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};



export default Cart;
