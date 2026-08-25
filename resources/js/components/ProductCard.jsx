import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Toast from './Toast';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  const discount = product.old_price
    ? Math.round(((product.old_price - product.price) / product.old_price) * 100)
    : null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-3">
        <p className="text-sm font-medium mb-1">{product.name}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">₹{product.price}</span>
          {product.old_price && (
            <>
              <span className="text-xs text-gray-400 line-through">₹{product.old_price}</span>
              <span className="text-xs text-rose-600">-{discount}%</span>
            </>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-rose-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-rose-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>

      <Toast
        message="Added to cart successfully!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}