import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders, deleteOrder } from '../actions/orderActions'
import OrderSearch from '../components/OrderSearch'

import jspdf from 'jspdf'
import "jspdf-autotable"

const OrderListScreen = ({ history, match }) => {

  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const orderDelete = useSelector((state) => state.orderDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders(keyword))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, successDelete, keyword])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteOrder(id))
    }
  }

  // genarate pdf
  const generatePDF = tickets => {

    const doc = new jspdf();
    const tableColumn = ["ID", "USER", "DATE", "TOTAL"];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];




    tickets.map(ticket => {

      const ticketData = [

        ticket._id,
        ticket.user.name,
        ticket.createdAt.substring(0, 10),
        ticket.totalPrice,
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

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });

    doc.save("Product Report.pdf");

  };


  return (
    <>
    
    <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mt-2 mb-2'>
            <h1>Orders</h1>
          </div>
          {/* <div className='col-lg-5 mt-2 mb-2'> */}
          <OrderSearch history={history} />


          {/* </div> */}
        </div>

      </div>
      <div class="buttonn" style={{ marginRight: '0%' }}>
        <button type="button" class="btn btn-primary" style={{ backgroundColor: '#133C48' }} onClick={() => generatePDF(orders)} >GenerateReport</button> <br></br>
      </div>

      <br />
     
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                  &nbsp;
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(order._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen
