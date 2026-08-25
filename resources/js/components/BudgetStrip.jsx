import { Link } from 'react-router-dom';

export default function BudgetStrip() {
  const tiers = [
    { label: 'Under ₹999', slug: '999' },
    { label: 'Under ₹1,499', slug: '1499' },
    { label: 'Under ₹2,999', slug: '2999' },
  ];

  return (
    <div className="bg-pink-100 px-4 py-8">
      <div className="grid grid-cols-2 gap-3">
        {tiers.map((t) => (
          <Link
            key={t.slug}
            to={`/budget/${t.slug}`}
            className="bg-white border-2 border-pink-200 rounded-2xl p-5 text-center"
          >
            <p className="font-semibold text-sm">{t.label}</p>
            <span className="mt-3 w-9 h-9 rounded-full bg-pink-400 text-white mx-auto flex items-center justify-center">
              →
            </span>
          </Link>
        ))}
        <Link
          to="/budget/premium"
          className="col-span-2 sm:col-span-1 bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-2xl p-5 text-center"
        >
          <p className="text-xs tracking-wide">Premium</p>
          <p className="font-serif text-xl">Pearls</p>
          <span className="mt-3 w-9 h-9 rounded-full bg-white/20 mx-auto flex items-center justify-center">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}