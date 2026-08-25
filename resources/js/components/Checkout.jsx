import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';


export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: '', pincode: '' });
  const [placed, setPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.email || !form.address || !form.city || !form.pincode) {
  return alert('Fill all fields');
}

const phoneDigits = form.phone.replace(/\D/g, '');
if (phoneDigits.length !== 10) {
  return alert('Phone number must be exactly 10 digits');
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(form.email)) {
  return alert('Please enter a valid email address');
}

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            qty: item.qty,
            price: item.price,
          })),
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Order failed:', data);
        alert('Order failed: ' + (data.message || 'Unknown error'));
        setLoading(false);
        return;
      }

      console.log('Order created:', data);
      setPlaced(true);
      clearCart();
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error — check console');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200';

if (placed) {
  return (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-2xl font-serif font-semibold text-gray-800">Order Placed!</h2>
      <p className="text-gray-500 mt-2">We'll reach out with delivery details soon.</p>
      <div className="flex flex-col gap-3 mt-8">
        <Link to="/" className="w-full py-3 rounded-full bg-rose-700 text-white font-semibold text-center">
          Continue Shopping
        </Link>
        <Link to="/my-orders" className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-semibold text-center">
          View My Orders
        </Link>
      </div>
    </div>
  );
}

 return (
  <div className="max-w-md mx-auto px-6 py-8">
    <Link to="/cart" className="flex items-center gap-1 text-sm text-gray-600 hover:text-rose-600 mb-4">
      <ArrowLeft className="w-4 h-4" />
      Back
    </Link>
    <h2 className="text-3xl font-serif font-semibold text-rose-700 mb-6">Checkout</h2>
      <div className="w-10 h-1 rounded mb-8 bg-black"></div>

      <div className="space-y-4">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className={inputClass} />
       <input
          name="phone"
           type="tel"
              inputMode="numeric"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
               setForm({ ...form, phone: digitsOnly });
               }}
                maxLength={10}
           className={inputClass}
             />
        <input name="email" type="email" required placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className={inputClass} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} className={inputClass} />
        <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} className={inputClass} />
      </div>

      <div className="flex justify-between items-center my-6">
        <span className="text-lg font-bold">Total</span>
        <span className="text-lg font-bold">₹{total}</span>
      </div>

      <button
        type="button"
        onClick={placeOrder}
        disabled={loading}
        className="w-full py-3 rounded-full bg-rose-700 text-white font-semibold hover:bg-rose-800 transition disabled:opacity-50"
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
}