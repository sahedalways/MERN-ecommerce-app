import React, { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../../Components/Product/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../../Components/LoadingBox/LoadingBox";
import MessageBox from "../../Components/MessageBox/MessageBox";


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <Helmet>
        <title>Sahed's Shop</title>
      </Helmet>

      
      <h1>Featured Products</h1>
      <section className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={uuidv4()} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}> </Product>
              </Col>
            ))}
          </Row>
        )}
          
      </section>
   
    </div>
  );
};

export default Home;
