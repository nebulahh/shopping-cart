import React from 'react'
import './Nav.css'
import { useContext } from 'react'
import CartContext from '../UserContext'
import {Link} from 'react-router-dom'

function Nav() {
    const {items} = useContext(CartContext)
    console.log(items);

  return (
  
<header className='page-header'>

<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to={'/'}>
                <span className="navbar-brand" >Anything Store</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    
                        <li className="nav-item">
                        <Link to={'/shop'}>
                            <span className="nav-link active">Shop</span>
                            </Link>
                        </li>
                       
                    </ul>

                    <Link to={'/checkout'}>
                    <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{items.length}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
</header>
  )
}

export default Nav