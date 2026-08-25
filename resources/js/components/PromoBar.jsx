export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-purple-950 via-rose-900 to-purple-950 overflow-hidden py-3 whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="text-white text-sm sm:text-lg italic font-semibold tracking-widest mx-6 sm:mx-10"
          >
            Let's Shop
          </span>
        ))}
      </div>
    </div>
  );
}