import React from 'react'
import { Spinner } from 'reactstrap'
import './LoadingAbsolute.css'

const LoadingAbsolute = ({ text }) => {
  return (
    <div className='loadingDiv'>
      <Spinner className='loading' type='grow'></Spinner>
      <div
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default LoadingAbsolute
