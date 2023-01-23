import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

function Error() {
  return (
    <>
      <section className="error">
        <div className="container">
          <h1 className="title">ERROR 404</h1>
          <h2 className="subtitle">Page not found</h2>
          <Link to={'/'} className='btn'>Back to Portfolio</Link>
        </div>
      </section>
    </>
  )
}

export default Error
