import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from '../Shop/Shop';
import Home from '../Home/Home'
import Checkout from '../Checkout/Checkout';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { CartProvider } from '../UserContext';

const RouteSwitch = () => {
 
  return (
    <CartProvider>
      <BrowserRouter basename='/'>
     <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
   
  );
}

export default RouteSwitch
