import React from 'react'
import data from '../Food-imgs/Foods'
import { useContext } from 'react'
import CartContext from '../UserContext'

function FoodItem() {
    const { addToCart } = useContext(CartContext)
  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((food) => {
                return (
                    <div key={food.id} className='col mb-5'>
                        <div className="card h-100">
                        <img className="card-img-top" src={food.pictureDir} alt="..." />
             
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* Product name*/} 
                            <h5 className="fw-bolder">{food.title}</h5>
                            {/* Product price*/} 
                            ${food.price}
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <a onClick={() => addToCart(food.id)}  className="btn btn-outline-dark mt-auto" href="#!">Add to Cart</a>
                        </div>
                    </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
</section>
  )
}

export default FoodItem