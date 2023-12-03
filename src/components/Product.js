import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { Alert } from "react-bootstrap";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const {data:products,status} = useSelector(state=>state.products);

  // const [products, getProducts] = useState([]);
  useEffect(() => {
    //dispatch an action for fetchProducts
    dispatch(getProducts());
    // API
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  }, [dispatch]);

  if(status ===StatusCode.LOADING){
    return <p>Loading.....</p>
  }

  if(status ===StatusCode.ERROR){
    return <Alert key='danger' variant='danger'>Something went wrong !!! Please try again l</Alert>
  }

  const addToCart =(product) => {
    // dispatch an add action
    dispatch(add(product))
  };

  const cards = products.map(product => (
    <div className="col-md-3" style={{margin:'auto', padding:'10px'}}>
      <Card style={{ width: "39rem" }}>
        <Card key={product.id} className="h-100"/>
        <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width :'400px', height:'450px',padding:'10px'}}/>
       </div>
       <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor : 'white'}}>
        <Button variant="primary" onClick={()=>addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  
  return (
    <>
      <h1 className="title" style={{fontSize :"120px", margin :'10px 0 40px 0'}}>
        <b>Products Dashboard</b>
      </h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
