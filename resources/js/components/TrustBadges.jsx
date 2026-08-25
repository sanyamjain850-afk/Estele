import { Sparkles, RotateCcw, Truck } from "lucide-react";

const badges = [
  { icon: Sparkles, title: "100% Anti-Tarnish" },
  { icon: RotateCcw, title: "7-Day Return & Exchange" },
  { icon: Truck, title: "Free Shipping Available" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-10 text-center">
      {badges.map(({ icon: Icon, title }) => (
        <div key={title}>
          <Icon className="w-6 h-6 mx-auto text-rose-500" strokeWidth={1.5} />
          <p className="text-sm font-medium mt-2">{title}</p>
          
        </div>
      ))}
    </div>
  );
}