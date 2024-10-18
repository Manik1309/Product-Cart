import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
   <BrowserRouter>
   <Header cart ={cart} />
   <div className='container'>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
      <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />}/>
    </Routes>
     </div>
   </BrowserRouter>
    </>
  );
};

export default App;