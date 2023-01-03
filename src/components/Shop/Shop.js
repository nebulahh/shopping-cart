import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './Shop.css';

function Shop() {
  const marginTop = {
    marginTop: '7rem',
  };

  return (
    <div>
      <main className="container" role="main">
        {/*  */}
        <section style={marginTop} className="back py-5">
          <div className="px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              {/* <p className="lead fw-normal text-white-50 mb-0">Think Different.</p> */}
            </div>
          </div>
        </section>
        <FoodItem />
      </main>
    </div>
  );
}

export default Shop;
