import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const UserSearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/admin/userlistS/search/${keyword}`)
      console.log("Searching....!")
      //user found pop message instead of above line

    } else {
      console.log("Search failed !")
      history.push('/admin/userlist')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
        
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Users...' 
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

export default UserSearchBox
