export default function Hero() {
  return (
    <div className="relative rounded-4xl overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 px-6 py-12 sm:py-20 text-center mb-8 mt-5">
      <p className="text-rose-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
        Festive Edit
      </p>
      <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-4">
        Jewellery For Every <span className="text-rose-600 italic">Story</span>
      </h1>
      <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto mb-6">
        Lightweight, anti-tarnish pieces designed to be worn every day.
      </p>
      <a
        href="#shop"
        className="inline-block bg-gray-900 text-white text-sm sm:text-base font-medium px-8 py-3 rounded-full hover:bg-rose-700 transition"
      >
       Scroll to Explore
      </a>
    </div>
  );
}