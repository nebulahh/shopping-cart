import React from 'react';
import './Checkout.css';
import { useContext } from 'react';
import CartContext from '../UserContext';
import { v4 as uuidv4 } from 'uuid';

function Checkout() {
  const black = {
    color: 'black',
  };

  const margin = {
    marginTop: '7rem',
    marginLeft: '65px',
    marginRight: '65px',
    flexGrow: '1',
    minHeight: '24.2rem',
  };

  const marginLeft = {
    marginLeft: '5rem',
  };
  const {
    items,
    delete_from_cart,
    increment_quantity_and_price,
    decrement_quantity_and_price,
  } = useContext(CartContext);
  console.log(items);
  let cache = {};

  for (let obj of items) {
    if (cache.hasOwnProperty(obj.title)) {
      cache[obj.title]++;
    } else {
      cache[obj.title] = 1;
      cache.price = obj.price;
    }
  }

  console.log(cache);
  return (
    <div style={margin}>
      <div className="col-25">
        <div className="container">
          <h4>
            Cart
            <span className="price" style={black}>
              <i className="fa fa-shopping-cart"></i>
              <b>{items.length}</b>
            </span>
          </h4>
          {items.map((element, index) => {
            return (
              <p key={uuidv4()}>
                <a href="#!" onClick={() => delete_from_cart(index)}>
                  X
                </a>
                <span>{element.title}</span>
                <span style={marginLeft}>
                  <small
                    onClick={() =>
                      increment_quantity_and_price(index, element.title)
                    }
                  >
                    {' '}
                    +{' '}
                  </small>
                  <span id="counting">{element.quantity}</span>
                  <small
                    onClick={() =>
                      decrement_quantity_and_price(index, element.title)
                    }
                  >
                    {' '}
                    -{' '}
                  </small>{' '}
                </span>

                <span className="price">${element.price}</span>
              </p>
            );
          })}
          <hr />
          <p>
            Total{' '}
            <span className="price" style={black}>
              <b>
                ${items.reduce((acc, val) => acc + val.price * val.quantity, 0)}
              </b>
            </span>
          </p>
        </div>
        <input type="submit" value="Continue to checkout" className="btn" />
      </div>
    </div>
  );
}

export default Checkout;
