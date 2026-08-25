import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import { catalog } from '../data/products';

const priceFilters = [
  { label: 'All', test: () => true },
  { label: 'Under ₹999', test: p => p.price < 999 },
  { label: 'Under ₹1,499', test: p => p.price < 1499 },
  { label: 'Under ₹2,999', test: p => p.price < 2999 },
  { label: 'Premium', test: p => p.price >= 5000 },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = catalog[slug];
  const [activeFilter, setActiveFilter] = useState('All');

  if (!data) {
    return (
      <div className="px-6 py-20 text-center">
        <p className="text-gray-500">Category not found.</p>
        <Link to="/" className="text-rose-600 underline">Go back home</Link>
      </div>
    );
  }

  const filterFn = priceFilters.find(f => f.label === activeFilter).test;
  const filteredProducts = data.products.filter(filterFn);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-rose-600 mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h1 className="text-center text-2xl sm:text-3xl font-serif font-semibold mb-6">
        {data.title}
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {priceFilters.map(f => (
          <button
            key={f.label}
            onClick={() => setActiveFilter(f.label)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === f.label
                ? 'bg-rose-700 text-white border-rose-700'
                : 'bg-white text-gray-700 border-gray-300 hover:border-rose-400'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products in this range.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}