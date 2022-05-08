import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import jspdf from 'jspdf'
import "jspdf-autotable" 

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

// genarate pdf
const generatePDF = tickets => {

      const doc = new jspdf();       
      const tableColumn = ["Name", "Price", "Quantity"];      
      const tableRows = [];        
      const date = Date().split(" ");        
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
      
        
  
  
 tickets.map(ticket => {
  
const ticketData = [
          
        ticket.name,     
        ticket.price,
        ticket.qty,    
// ticket.brand,       
//ticket.designation,
//ticket.mail,
// ticket.type,
];
  
 tableRows.push(ticketData);
  
 })
  
doc.text("DYNO_TECH", 70, 8).setFontSize(13);
doc.text("Cart Invoice", 14, 16).setFontSize(13);
 doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
  
//right down width height
//doc.addImage(img, 'JPEG', 170, 8, 25, 25);
  
 doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
  
doc.save("Product Report.pdf");
  
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>Rs.{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              Rs.
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{backgroundColor:'#133C48',width:'380px'}}
              >
                Proceed To Checkout
              </Button>
              <br /><br />
              <div class="buttonn">
                <button type="button" class="btn btn-primary" style={{backgroundColor:'#133C48',width:'380px'}} onClick={() => generatePDF(cartItems)} >GenerateReport</button> <br></br>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
