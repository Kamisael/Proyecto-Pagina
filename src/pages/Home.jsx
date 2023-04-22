
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";



import "../styles/home.css";


const Home = () => {




  return (
    <Helmet title="Home">
      <section className="section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">


                <p className="textohome">
                  Comparte con las personas de tu zona las ofertas que encuentres
                  para ellos para que sepan que estas mas cerca de lo que creen.
                </p>



              </div>
            </Col>


          </Row>
        </Container>
      </section>




    </Helmet>
  );
};

export default Home;
