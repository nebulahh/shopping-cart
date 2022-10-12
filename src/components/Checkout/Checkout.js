import React from 'react'
import './Checkout.css'
import { useContext } from 'react'
import CartContext from '../UserContext'

function Checkout() {

  const black = {
    color: 'black'
  }

  const margin = {
    marginTop: '7rem',
    marginLeft: '65px',
    marginRight: '65px',
    flexGrow: '1',
    minHeight: '24.2rem'
  }
  const { items } = useContext(CartContext)
  console.log(items)
  return (
    <div style={margin}>
         <div className="col-25">
           <div className="container">
             <h4>Cart 
              <span className="price" style={black}>
                <i className="fa fa-shopping-cart"></i> 
                <b>{items.length}</b></span>
              </h4>
             {
                items.map(element => (
                   (
                  
                      <p key={element.id}>
                        <span>{element.title}</span> 
                        <span className="price">${element.price}</span>
                      </p>
                   
                   
                  )
                ))
               }
             <hr/>
             <p>Total <span className="price" style={black}><b>${items.reduce((acc, val) => acc + Number(val.price), 0)}</b></span></p>
           </div>
           <input type="submit" value="Continue to checkout" className="btn"/>
        </div>


    </div>
  )
}

export default Checkout