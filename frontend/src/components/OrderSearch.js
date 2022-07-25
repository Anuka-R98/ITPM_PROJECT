import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const OrderSearch = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/admin/orderlistS/search/${keyword}`)
    } else {
      history.push('/admin/orderlist/')
    }
  }
  console.log(keyword)
  return (
    <div class="container" style={{ padding: '1rem 0' }}>

      <Form onSubmit={submitHandler} inline>
        <div class="row">
          <div class='col-9'>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search Orders by Payment Method'
              className='mr-sm-2 ml-sm-5'
            ></Form.Control>
          </div>
          <div class='col-3' style={{ padding: '0 0' }}>
            <Button type='submit' style={{ backgroundColor: '#133C48' }}>
              Search
            </Button>
          </div>
        </div>
      </Form>

    </div >
  )
}

export default OrderSearch