import React from 'react'


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <footer>

<MDBFooter className='text-center text-white' style={{ backgroundColor: '#133C4B' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-0'>
          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          id='footer'>
            <MDBIcon fab className='fa-lg fa-facebook-f' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
            id='footer'>
            <MDBIcon fab className='fa-lg fa-twitter' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
            id='footer'>
            <MDBIcon fab className='fa-lg fa-google' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
            id='footer'>
            <MDBIcon fab className='fa-lg fa-instagram' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
            id='footer'>
            <MDBIcon fab className='fa-lg fa-linkedin' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-light m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
            id='footer'>
            <MDBIcon fab className='fa-lg fa-github' />
          </a>
        </section>
      </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
           2022 Copyright © &nbsp;
          <a className='text-white' href='' style={{ textDecoration: 'none' }}>
           D Y N O - T E C H
          </a>
        </div>
      </MDBFooter>


    </footer>
  )
}

export default Footer