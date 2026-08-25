import { Link } from 'react-router-dom';

const categories = [
  { name: 'Necklaces', slug: 'necklaces', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI6YVcFGMqMkjrCr0crs8h2GsGUbDrXGqKIOXlWXCpg&s=10' },
  { name: 'Earrings', slug: 'earrings', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE7H0kCCeIsXeSRFjtDgeZC8BqGlEh7-OaO4aWcQZYA&s=10' },
  { name: 'Rings', slug: 'rings', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UdLD5mYDlWG0JmIi6kliIaE_t4tdRpJArxgz2ireeA&s=10' },
  { name: 'Bracelets', slug: 'bracelets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HtztxraM07ROWqhVIyj9sJSHqE-AE0KPlgfB_Ff2Ig&s=10' },
];

export default function Categories() {
  return (
    <section id='shop-by-category' className="px-4 sm:px-6 py-10">
      
      <h2 className="text-center text-xl sm:text-2xl font-serif font-semibold mb-6">
        Shop by Category
      </h2>
      <div className="h-2 w-6 bg-black mx-auto mb-16 rounded-2xl"></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
        {categories.map((c) => (
          <Link key={c.name} to={`/category/${c.slug}`} className="group block">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center text-xs sm:text-sm font-medium tracking-wide text-gray-800">
              {c.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}