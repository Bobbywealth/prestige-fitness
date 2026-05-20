import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, Plus, Minus, Heart, Share2, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", name: "All" },
  { id: "apparel", name: "Apparel" },
  { id: "accessories", name: "Accessories" },
  { id: "equipment", name: "Equipment" },
  { id: "supplements", name: "Supplements" },
];

const products = [
  {
    id: 1,
    name: "Prestige Performance Tee",
    price: 45,
    category: "apparel",
    image: "https://i.imgur.com/H190n3N.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    colors: ["Black", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium moisture-wicking fabric with embossed Prestige logo. Built for performance, styled for the streets.",
  },
  {
    id: 2,
    name: "PF Elite Hoodie",
    price: 85,
    category: "apparel",
    image: "https://i.imgur.com/1UTWvyJ.jpg",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Heavyweight fleece hoodie with embroidered PF logo. The ultimate training essential.",
  },
  {
    id: 3,
    name: "Prestige Gym Bottle",
    price: 28,
    category: "accessories",
    image: "https://i.imgur.com/yUtmxdL.jpg",
    rating: 4.7,
    reviews: 203,
    colors: ["Black"],
    description: "32oz insulated stainless steel bottle. Keeps drinks cold for 24 hours.",
  },
  {
    id: 4,
    name: "Prestige Gym Bag",
    price: 65,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.6,
    reviews: 67,
    badge: "Sale",
    colors: ["Black"],
    description: "Durable duffel bag with shoe compartment and multiple pockets.",
  },
  {
    id: 5,
    name: "Compression Shirt",
    price: 38,
    category: "apparel",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
    rating: 4.5,
    reviews: 156,
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Second-skin fit for maximum support during intense workouts.",
  },
  {
    id: 6,
    name: "Resistance Bands Set",
    price: 42,
    category: "equipment",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600",
    rating: 4.8,
    reviews: 312,
    colors: ["Multi"],
    description: "5-level resistance band set with carrying case and exercise guide.",
  },
  {
    id: 7,
    name: "Training Gloves",
    price: 32,
    category: "equipment",
    image: "https://images.unsplash.com/photo-1601225996804-b0d3e1c78d68?w=600",
    rating: 4.4,
    reviews: 198,
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    description: "Padded palm gloves with wrist support. Maximum grip, zero blisters.",
  },
  {
    id: 8,
    name: "Prestige Cap",
    price: 30,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600",
    rating: 4.7,
    reviews: 145,
    badge: "Best Seller",
    colors: ["Black", "White"],
    description: "Structured six-panel cap with 3D embroidered logo.",
  },
  {
    id: 9,
    name: "Pre-Workout Stack",
    price: 49,
    category: "supplements",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a4?w=600",
    rating: 4.6,
    reviews: 89,
    colors: ["Blue Raspberry", "Fruit Punch"],
    description: "30 servings of clean, stimulant-free pre-workout energy.",
  },
  {
    id: 10,
    name: "Protein Powder",
    price: 55,
    category: "supplements",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600",
    rating: 4.9,
    reviews: 445,
    badge: "New",
    colors: ["Chocolate", "Vanilla", "Strawberry"],
    description: "25g protein per serving. Whey isolate blend for optimal recovery.",
  },
  {
    id: 11,
    name: "Training Tank",
    price: 35,
    category: "apparel",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    rating: 4.5,
    reviews: 78,
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight tank with cut-away shoulders for maximum mobility.",
  },
  {
    id: 12,
    name: "Lifting Belt",
    price: 58,
    category: "equipment",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
    rating: 4.8,
    reviews: 167,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium leather lifting belt with double prong closure.",
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const filteredProducts = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#2c2c2c] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:top-5 md:px-6 md:pt-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-3 py-2.5 shadow-[0_0_35px_rgba(0,0,0,.45)] backdrop-blur-2xl md:px-6 md:py-3">
          <Link to="/" className="flex items-center gap-2.5 md:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-600/60 bg-black shadow-[0_0_20px_rgba(220,38,38,.35)] md:h-11 md:w-11">
              <span className="text-xs font-black tracking-tight text-white md:text-sm">
                <span className="text-red-600">P</span>F
              </span>
            </div>
            <div className="leading-none">
              <p className="text-xs font-black uppercase tracking-[0.38em] text-white md:text-sm">Prestige</p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.55em] text-red-500 md:mt-1 md:text-[10px]">Fitness</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full border border-white/20 p-2 transition hover:border-red-600 hover:text-red-500">
              <ShoppingBag className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 md:pt-40 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm"
          >
            PRESTIGE COLLECTION
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-black uppercase md:text-5xl lg:text-6xl"
          >
            Train In <span className="text-red-600">Style</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-gray-400 md:text-lg"
          >
            Premium gear for those who demand excellence. Elevate your training with the Prestige collection.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 border-y border-white/10 bg-[#2c2c2c]/95 backdrop-blur-md px-4 py-4 md:top-24 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide transition ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,.4)]"
                    : "border border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white outline-none focus:border-red-600"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#3d3d3d] overflow-hidden transition hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,.2)]"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <span className={`absolute left-3 top-3 rounded-full px-2 py-1 text-[10px] font-bold uppercase ${
                    product.badge === "Sale" ? "bg-green-600" : 
                    product.badge === "New" ? "bg-blue-600" : "bg-red-600"
                  }`}>
                    {product.badge}
                  </span>
                )}
                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
                  <button className="rounded-full bg-black/50 p-2 backdrop-blur-sm transition hover:bg-red-600">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-black/50 p-2 backdrop-blur-sm transition hover:bg-red-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-xs">({product.reviews})</span>
                </div>
                <h3 className="mt-2 font-bold uppercase">{product.name}</h3>
                <p className="mt-1 text-xl font-black text-red-500">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 bg-[#3d3d3d] px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="text-center">
            <Truck className="mx-auto h-8 w-8 text-red-500" />
            <h4 className="mt-3 font-bold">Free Shipping</h4>
            <p className="mt-1 text-sm text-gray-400">On orders over $50</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto h-8 w-8 text-red-500" />
            <h4 className="mt-3 font-bold">Quality Guarantee</h4>
            <p className="mt-1 text-sm text-gray-400">30-day return policy</p>
          </div>
          <div className="text-center">
            <ShoppingBag className="mx-auto h-8 w-8 text-red-500" />
            <h4 className="mt-3 font-bold">Secure Checkout</h4>
            <p className="mt-1 text-sm text-gray-400">SSL encrypted payments</p>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 z-50 overflow-auto rounded-3xl border border-white/10 bg-[#2c2c2c] md:inset-auto md:left-1/2 md:top-1/2 md:z-50 md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 transition hover:border-red-600 hover:text-red-500 md:right-6 md:top-6"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-black">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span>{selectedProduct.rating}</span>
                    <span>({selectedProduct.reviews} reviews)</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-black uppercase md:text-3xl">{selectedProduct.name}</h2>
                  <p className="mt-2 text-3xl font-black text-red-500">${selectedProduct.price}</p>
                  <p className="mt-4 text-gray-400">{selectedProduct.description}</p>

                  {selectedProduct.colors && (
                    <div className="mt-6">
                      <p className="text-sm font-bold">Color:</p>
                      <div className="mt-2 flex gap-2">
                        {selectedProduct.colors.map((color) => (
                          <button
                            key={color}
                            className="rounded-full border border-white/20 px-3 py-1 text-xs transition hover:border-red-600"
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProduct.sizes && (
                    <div className="mt-6">
                      <p className="text-sm font-bold">Size:</p>
                      <div className="mt-2 flex gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold transition hover:border-red-600 hover:bg-red-600"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="mt-8 w-full rounded-full bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition hover:scale-[1.02] hover:bg-red-500 active:scale-[0.98] md:px-8"
                  >
                    {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Truck className="h-3 w-3" /> Free shipping over $50
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" /> 30-day returns
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Toast */}
      <AnimatePresence>
        {addedToCart && (
          <motion.div
            initial={{ opacity: 0, y: 100, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 100, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 rounded-full bg-red-600 px-6 py-3 font-bold shadow-[0_0_40px_rgba(220,38,38,.6)]"
          >
            ✓ Added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
