import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userActions'
import { Route } from 'react-router-dom'
import UserSearchBox from '../components/UserSearchBox'
import jspdf from 'jspdf'
import "jspdf-autotable"

const UserListScreen = ({ history, match }) => {

  const keyword = match.params.keyword
  console.log(keyword)
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(keyword))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete, userInfo, keyword])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }

  // genarate pdf

  const generatePDF = tickets => {
    const doc = new jspdf();
    const tableColumn = ["Id", "Name", "Email", "Admin"];
    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    tickets.map(ticket => {
    
    const ticketData = [
    ticket._id,
    ticket.name,
    ticket.email,
    ticket.admin,
    //ticket.designation,
    //ticket.mail,
    // ticket.type,
    
     ];
    
     tableRows.push(ticketData);
    
    })
    
      doc.text("DYNO_TECH", 70, 8).setFontSize(13);
      
      doc.text("Registered Users Report", 14, 16).setFontSize(13);
      
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
      
      //right down width height
      
    //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
      
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
      
      doc.save("Registered Users Report.pdf");
    
     };

  return (
    <>
      {/* <Route render={({ history }) => <UserSearchBox history={history} />} /> <br/> */}
      <UserSearchBox history={history} /><br/>
      <h1>Users</h1>
      <div class="buttonn">
      <button type="button" class="btn btn-primary" style={{backgroundColor:'#133C48'}} onClick={() => generatePDF(users)} >GenerateReport</button> <br></br>
     </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
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

export default UserListScreen
