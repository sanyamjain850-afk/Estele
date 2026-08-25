import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const menuLinks = [
   { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'New Arrivals', href: '/#new-arrivals' },
  { label: 'Bestsellers', href: '/#bestsellers' },
  { label: 'Shop by Category', href: '/#shop-by-category' },
  { label: 'My Orders', href: '/my-orders' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-rose-100 flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-gray-700 hover:text-rose-700 transition"
        >
          <span className="text-xl leading-none">☰</span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest">MENU</span>
        </button>

        <Link to="/" className="text-2xl sm:text-3xl font-script text-rose-700">
          Estele
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-1 text-gray-700 hover:text-rose-700 transition"
        >
          <span className="text-xl leading-none">🛍</span>
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            {count}
          </span>
        </Link>
      </header>

      {/* Overlay + Drawer — fixed to viewport, works on any screen size */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer panel */}
          <div className="w-72 sm:w-96 max-w-[85vw] h-full bg-white shadow-2xl overflow-y-auto flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b sticky top-0 bg-white z-10">
              <span className="font-semibold tracking-widest text-sm">MENU</span>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl leading-none text-gray-500 hover:text-rose-700"
              >
                ×
              </button>
            </div>
            <nav className="flex-1">
              {menuLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 border-b border-gray-100 text-sm sm:text-base font-medium tracking-wide text-gray-800 hover:bg-rose-50 hover:text-rose-700 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Backdrop — click to close */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}