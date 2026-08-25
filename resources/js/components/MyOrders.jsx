import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MyOrders() {
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookup = async () => {
    if (!phone) return setError('Enter your phone number');
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/orders/my-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <Link to="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-rose-600 mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      <h2 className="text-2xl font-serif font-semibold mb-6">My Orders</h2>

      <div className="flex gap-2 mb-6">
  <input
    value={phone}
    onChange={e => setPhone(e.target.value)}
    placeholder="Enter your phone no."
    className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-rose-500"
  />
  <button
    onClick={lookup}
    disabled={loading}
    className="shrink-0 px-4 sm:px-6 py-2.5 rounded-full bg-rose-700 text-white font-semibold text-sm sm:text-base whitespace-nowrap"
  >
    {loading ? '...' : 'Search'}
  </button>
</div>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      {orders && orders.length === 0 && (
        <p className="text-gray-500">No orders found for this phone number.</p>
      )}

      {orders && orders.map(order => (
        <div key={order.id} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">{order.name}</span>
            <span className="text-sm text-gray-500">{order.created_at}</span>
          </div>
          <p className="text-sm text-gray-600">{order.address}, {order.city} - {order.pincode}</p>
          <div className="mt-3 border-t pt-3">
            {order.items?.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.product_name} x{item.qty}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 font-bold text-right">Total: ₹{order.total}</div>
          <div className="mt-1 text-sm text-rose-600 font-medium capitalize">{order.status}</div>
        </div>
      ))}
    </div>
  );
}