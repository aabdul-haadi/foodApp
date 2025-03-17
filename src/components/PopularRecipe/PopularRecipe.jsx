import React from "react";
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";

// Animation for initial page load
const pageLoadAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// SlideUp Animation Function for individual items
const SlideUp = (delay) => ({
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

// Dessert Data
const PopularRecipeData = [
  { id: 1, name: "Hot Dessert", img: Food1, price: "$5.99", delay: 0.4 },
  { id: 2, name: "Hot Cake", img: Food2, price: "$5.00", delay: 0.8 },
  { id: 3, name: "Sweet Delight", img: Food3, price: "$9.99", delay: 1.2 },
];

export const PopularRecipe = () => {
  return (
    <motion.section
      {...pageLoadAnimation} // Apply page load animation
      className="container py-24"
    >
      {/* Heading */}
      <motion.h3
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="animate"
        className="text-4xl text-center font-league font-semibold uppercase text-gray-800"
      >
        Our Popular Recipe
      </motion.h3>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-8">
        {PopularRecipeData.map((item) => (
          <motion.div
            key={item.id}
            variants={SlideUp(item.delay)}
            initial="hidden"
            whileInView="animate"
            className="group space-y-3 text-center bg-white/50 shadow-xl p-6 rounded-xl transition-all"
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-44 mx-auto img-shadow transition-transform duration-400 group-hover:scale-110 group-hover:translate-y-[-20px] group-hover:rotate-6"
            />
            <p className="text-xl font-bold text-yellow-500">{item.name}</p>
            <p className="text-lg text-gray-700">{item.price}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
