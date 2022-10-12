import React from 'react'
import img from '../Home-imgs/chef.jpg'
import { Link } from 'react-router-dom'

function Home() {
  const style = {
    margin: '9.67rem auto',
    gap: '25px',
    alignItems: 'center'
  }

  const block = {
    display: 'inline-block',
    marginLeft: '25px'
  }
  
  return (
      <main role="main" style={style} className="container d-flex justify-content-between">

     <div>
     <h1 className="mt">Get the best food from a master chef</h1>
      <p className="mb-6 lead">We try to deliver the best for your stomach.
      <Link style={block} to={'/shop'}>
      <button  className='btn btn-primary' type='button'>Shop</button>
      </Link> 
      </p> 
     </div>

     <div className='w-75'>
      <img className='home-img mw-100' src={img} alt='...'/>
     </div>

    </main>

  )
}

export default Home