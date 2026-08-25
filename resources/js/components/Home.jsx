import Hero from "./Hero";
import Categories from "./Categories";
import BudgetStrip from "./BudgetStrip";
import ProductCard from "./ProductCard";
import TrustBadges from "./TrustBadges";
import Testimonials from "./Testimonials";
import AboutUs from "./Newsletter";
import PromoBar from "./PromoBar";

export default function Home({ newArrivals = [], bestsellers = [] }) {
  return (
    <div>
      <Hero />
      <PromoBar/>
      <Categories />
      <BudgetStrip />
      <section id="new-arrivals" className="px-4 py-10">
        <h2 className="text-center text-2xl font-serif mb-6">New Arrivals</h2>
        <div className="h-2 w-6 bg-black mx-auto mb-16 rounded-2xl"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section id="bestsellers" className="px-4 py-10 bg-neutral-50">
        <h2 className="text-center text-2xl font-serif mb-6">Bestsellers</h2>
        <div className="h-2 w-6 bg-black mx-auto mb-16 rounded-2xl"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      
      <TrustBadges />
      <Testimonials />
      <AboutUs />
    </div>
  );
}