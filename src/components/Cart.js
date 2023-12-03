import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';



const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const removeFromCart =(id)=>{
    // dispact a remove action
    dispatch(remove(id));
  }

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-2" // Adjust the column width as needed
      style={{
        margin: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Card style={{ width: '100%',height:'100%',marginLeft:'300px',marginRight:'auto'}}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ maxWidth: '350px', height: '450px', padding: '10px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <Button variant="danger" onClick={()=> removeFromCart(product.id)}>Remove from Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  const cartLinkStyle = {
    fontSize: '80px',
    padding: '10px 20px',
  };

  return (
    <>
      <h3 style={cartLinkStyle}>Cart</h3>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
