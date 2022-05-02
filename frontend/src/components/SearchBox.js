import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={ submitHandler } inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      style={{width:'90%',backgroundColor:'#D9D9D9'}}
      ></Form.Control>
      <div  style={{marginTop:'-3.7%',marginLeft:'91%'}}>
         <Button type='submit'  style={{backgroundColor:'#133C48'}}>
        Search
      </Button>
      </div>
    </Form>
  )
}

export default SearchBox
