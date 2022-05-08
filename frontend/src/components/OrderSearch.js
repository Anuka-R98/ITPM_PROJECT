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
    <Form onSubmit={ submitHandler } inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Orders'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
         <Button type='submit'  style={{backgroundColor:'#133C48'}}>
        Search
      </Button>
    </Form>
  )
}

export default OrderSearch