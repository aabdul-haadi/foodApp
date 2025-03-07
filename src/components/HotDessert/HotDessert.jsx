import React from "react";
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";

// SlideUp Animation Function
const SlideUp = (delay) => ({
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

// Dessert Data
const HotDessertData = [
  { id: 1, name: "Hot Dessert", img: Food1, price: "$5.99", delay: 0.4 },
  { id: 2, name: "Hot Cake", img: Food2, price: "$5.00", delay: 0.8 },
  { id: 3, name: "Sweet Delight", img: Food3, price: "$9.99", delay: 1.2 },
];

const HotDessert = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-center mb-8">Hot Desserts</h3>

        {/* Dessert Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => (
            <motion.div
              key={item.id}
              className="group bg-white/50 shadow-md p-4 flex items-center gap-4 rounded-lg transition-all duration-500 hover:shadow-xl"
              {...SlideUp(item.delay)}
            >
              {/* Dessert Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-24 rounded-full img-shadow group-hover:scale-110 transition-transform duration-700 group-hover:rotate-[15deg]"
              />

              {/* Dessert Info */}
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg text-yellow-500 font-medium">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDessert;
