import React from "react";
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Slide-Up Animation Function
const SlideUp = (delay) => ({
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center">
          
          {/* Text Section */}
          <motion.div variants={SlideUp(0.1)} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="space-y-3 me-14 text-center md:text-left">
              
              {/* Heading */}
              <div className="relative inline-block">
                <motion.h1 
                  variants={SlideUp(0.5)} 
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-transparent"
                >
                  Yummy
                </motion.h1>
                <img src={Leaf} alt="Leaf" className="absolute w-[50px] top-0 right-[-60px]" />
              </div>
              
              <motion.h1 
                variants={SlideUp(0.8)} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
              >
                BREAKFAST
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={SlideUp(0.4)} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-sm text-gray-700 max-w-md"
              >
                Start your day with a delicious, healthy, and energizing breakfast. Enjoy our fresh ingredients and mouth-watering recipes.
              </motion.p>

              {/* Button */}
              <motion.button 
                variants={SlideUp(0.5)} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="btn-primary flex items-center gap-2 mt-10"
              >
                <IoCartOutline size={24} />
                Order Now
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={SlideUp(0.6)} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex justify-end relative w-full">
            {/* Main Food Image */}
            <motion.img 
              initial={{ opacity: 0, rotate: 15, x: 50, y: 50 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src={FoodPng}
              alt="Delicious Food"
              className="w-[350px] img-shadow -mt-8 md:-mt-0 md:mr-[-50px]"
            />
            
            {/* Spoon Image - Positioned Left */}
            <motion.img
              initial={{ opacity: 0, rotate: 60, x: -50, y: 50 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              src={Spoon}
              alt="Spoon"
              className="w-[250px] absolute bottom-[-100px] -left-14 rotate-[65deg] img-shadow"
            />

            {/* Banana Image - Positioned Right */}
            <motion.img
              initial={{ opacity: 0, rotate: -30, x: 50, y: -30 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              src={Banana}
              alt="Banana"
              className="w-[300px] absolute top-[-40px] right-[-100px] md:right-[-120px] img-shadow"
            />
          </motion.div>
        </div>

        {/* Responsive Background */}
        <motion.div
          initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
          whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-0 right-[-59%] w-[50vw] h-[100vh] md:w-[40vw] md:h-[100vh] bg-lightYellow rounded-3xl z-[-1]"
        />
      </div>
    </main>
  );
};

export default Hero;
