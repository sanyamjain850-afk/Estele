import React, { useState } from 'react';

export default function AdminOrders() {
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError('Wrong password');
        setLoading(false);
        return;
      }

      const data = await res.json();
      setOrders(data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (!orders) {
    return (
      <div className="max-w-sm mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-serif font-semibold mb-6">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-4 outline-none focus:border-rose-500"
        />
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <button
          onClick={fetchOrders}
          disabled={loading}
          className="w-full py-3 rounded-full bg-rose-700 text-white font-semibold"
        >
          {loading ? 'Checking...' : 'View Orders'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-serif font-semibold mb-6">All Orders ({orders.length})</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{order.name}</span>
              <span className="text-sm text-gray-500">{order.created_at}</span>
            </div>
            <p className="text-sm text-gray-600">📍 {order.address}, {order.city} - {order.pincode}</p>
            <p className="text-sm text-gray-600">📞 {order.phone}</p>
            <p className="text-sm text-gray-600">✉️ {order.email || 'Not provided'}</p>
            <div className="mt-3 border-t pt-3">
              <p className="text-sm font-medium mb-1">Items purchased:</p>
              {order.items?.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.product_id} × {item.qty}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 font-bold text-right">Total: ₹{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}