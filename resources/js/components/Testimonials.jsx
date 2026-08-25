const reviews = [
  { name: 'Ritika', text: 'Comfortable, elegant, and holds up beautifully over time.' },
  { name: 'Meher', text: 'The finish and packaging felt genuinely premium.' },
];

export default function Testimonials() {
  return (
    <div className="mb-10">
      <h2 className="text-center text-xl sm:text-2xl font-serif font-semibold mb-6">
        Loved by Thousands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {reviews.map(r => (
          <div key={r.name} className="bg-rose-50 rounded-xl p-5 sm:p-6">
            <div className="text-amber-500 mb-2">★★★★★</div>
            <p className="text-sm sm:text-base text-gray-700 italic mb-3">"{r.text}"</p>
            <p className="text-xs sm:text-sm text-gray-500">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}