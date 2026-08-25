export const catalog = {
  necklaces: {
    title: 'Necklaces',
    products: [
      { id: 'n1', name: 'Petal Charm Necklace', price: 500, old_price: 900, image: '/images/products/necklace-1.jpg' },
      { id: 'n2', name: 'Coin Motif Gold Mangalsutra', price: 1100, old_price: 1499, image: '/images/products/necklace-2.jpg' },
      { id: 'n3', name: 'Crystal Harmony Necklace Set', price: 2000, old_price: 4299, image: '/images/products/necklace-3.jpg' },
      { id: 'n4', name: 'Petal Glow Necklace Set', price: 5000, old_price: 5799, image: '/images/products/necklace-4.jpg' },
      { id: 'n5', name: 'Rose Gold Statement Necklace', price: 10000, old_price: 15999, image: '/images/products/necklace-5.jpg' },
    ],
  },
  earrings: {
    title: 'Earrings',
    products: [
      { id: 'e1', name: 'Simple Stud Earrings', price: 500, old_price: 800, image: '/images/products/earrings-1.jpg' },
      { id: 'e2', name: 'Pearl Drop Earrings', price: 1100, old_price: 1799, image: '/images/products/earrings-2.jpg' },
      { id: 'e3', name: 'Peacock CZ Pearl Drop Earrings', price: 2000, old_price: 2999, image: '/images/products/earrings-3.jpg' },
      { id: 'e4', name: 'Chandelier Statement Earrings', price: 5000, old_price: 7999, image: '/images/products/earrings-4.jpg' },
      { id: 'e5', name: 'Diamond Halo Earrings', price: 10000, old_price: 16999, image: '/images/products/earrings-5.jpg' },
    ],
  },
  rings: {
    title: 'Rings',
    products: [
      { id: 'r1', name: 'Minimal Band Ring', price: 500, old_price: 750, image: '/images/products/ring-1.jpg' },
      { id: 'r2', name: 'Stone Stack Ring', price: 1100, old_price: 1599, image: '/images/products/ring-2.jpg' },
      { id: 'r3', name: 'Solitaire Ring', price: 2000, old_price: 2999, image: '/images/products/ring-3.jpg' },
      { id: 'r4', name: 'Gold Statement Ring', price: 5000, old_price: 6999, image: '/images/products/ring-4.jpg' },
      { id: 'r5', name: 'Diamond Halo Ring', price: 10000, old_price: 15999, image: '/images/products/ring-5.jpg' },
    ],
  },
  bracelets: {
    title: 'Bracelets',
    products: [
      { id: 'b1', name: 'Simple Chain Bracelet', price: 500, old_price: 850, image: '/images/products/bracelet-1.jpg' },
      { id: 'b2', name: 'Beaded Charm Bracelet', price: 1100, old_price: 1699, image: '/images/products/bracelet-2.jpg' },
      { id: 'b3', name: 'Tennis Bracelet', price: 2000, old_price: 3299, image: '/images/products/bracelet-3.jpg' },
      { id: 'b4', name: 'Gold Cuff Bracelet', price: 5000, old_price: 7499, image: '/images/products/bracelet-4.jpg' },
      { id: 'b5', name: 'Diamond Bangle Bracelet', price: 10000, old_price: 16999, image: '/images/products/bracelet-5.jpg' },
    ],
  },
};

export const allProducts = Object.values(catalog).flatMap(cat => cat.products);