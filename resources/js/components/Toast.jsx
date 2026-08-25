import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-neutral-900 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium">
        <CheckCircle className="w-4 h-4 text-green-400" />
        {message}
      </div>
    </div>
  );
}