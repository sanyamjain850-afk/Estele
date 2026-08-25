import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import { allProducts } from '../data/products';

const tiers = {
  '999': { title: 'Under ₹999', filter: p => p.price < 999 },
  '1499': { title: 'Under ₹1,499', filter: p => p.price < 1499 },
  '2999': { title: 'Under ₹2,999', filter: p => p.price < 2999 },
  'premium': { title: 'Premium Pearls', filter: p => p.price >= 5000 },
};

export default function BudgetPage() {
  const { tier } = useParams();
  const navigate = useNavigate();
  const config = tiers[tier];

  if (!config) {
    return (
      <div className="px-6 py-20 text-center">
        <p className="text-gray-500">Not found.</p>
        <Link to="/" className="text-rose-600 underline">Go back home</Link>
      </div>
    );
  }

  const products = allProducts.filter(config.filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-rose-600 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-center text-2xl sm:text-3xl font-serif font-semibold mb-8">
        {config.title}
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products in this range yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}