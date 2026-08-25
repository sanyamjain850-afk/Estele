import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage'; 
import BudgetPage from './components/BudgetPage';
import AdminOrders from './components/AdminOrders';
import ChatBot from './components/Chatbot';
import MyOrders from './components/MyOrders';

 const newArrivals = [
  {
    id: 1,
    name: 'Coin Motif Gold Mangalsutra',
    price: 1124,
    old_price: 1499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zQQqW5WU4PX99edRfquxsd_MD0tSC32JSb8r643obQ&s=10',
  },
  {
    id: 2,
    name: 'Red Stone Silver Earrings',
    price: 2399,
    old_price: 5000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yuVF4M0dy4m9Wn39A3yWoTEMx6SlQQqArUXNiLGV3Q&s=10',
  },
];

const bestsellers = [
  {
    id: 3,
    name: 'Premium Anti Tarish Bracelet',
    price: 1799,
    old_price: 2999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mXk_TrmCYNgl-lJ_lZNjhF45PWkWn2fNa3j_VJCxqA&s',
  },
  {
    id: 4,
    name: '22k Gold Ring',
    price: 2900,
    old_price: 5799,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8A6xA2KSnJi_2bp0iK8TQCmHNT6ZghABFZeY1qWbXhQ&s=10',
  },
];

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home newArrivals={newArrivals} bestsellers={bestsellers} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/budget/:tier" element={ <BudgetPage /> }/>
          <Route path="/my-orders" element={<MyOrders/>}/>
        </Routes>
        <Footer/>
       <ChatBot/>
      </CartProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('app')).render(<App />);