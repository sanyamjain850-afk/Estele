import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQty, total } = useCart();

  if (!cart.length) {
    return <p className="text-center text-gray-400 py-16">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
  <Link to="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-rose-600 mb-4">
    <ArrowLeft className="w-4 h-4" />
    Back
  </Link>
  <h2 className="text-2xl font-serif font-semibold mb-6">Your Bag</h2>
      {cart.map(i => (
        <div key={i.id} className="flex items-center justify-between border-b border-gray-100 py-4">
          <span className="font-medium text-gray-800">{i.name}</span>
          <div className="flex items-center gap-3">
            <button onClick={() => updateQty(i.id, -1)} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200">-</button>
            <span className="font-semibold">{i.qty}</span>
            <button onClick={() => updateQty(i.id, 1)} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200">+</button>
          </div>
          <span className="font-semibold">₹{i.price * i.qty}</span>
          <button onClick={() => removeFromCart(i.id)} className="text-xs text-gray-400 underline">Remove</button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-6 mb-4">
        <span className="text-lg font-bold">Total</span>
        <span className="text-lg font-bold">₹{total}</span>
      </div>
      <Link to="/checkout">
        <button className="w-full py-3 rounded-full bg-rose-700 text-white font-semibold hover:bg-rose-800 transition">
          Checkout
        </button>
      </Link>
    </div>
  );
}