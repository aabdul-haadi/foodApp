import React from "react";
import BannerPng from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";  // Now correctly importing

const Banner = () => {
  return (
    <section className="">
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* Image Section */}
<div className="relative bg-lightYellow bg-opacity-10 backdrop-blur-md">
{/* <motion.img initial={{
  opacity: 0,
  x: -100,
  y: 100,

}}
whileInView={{
  opacity: 1,
  x: 0,`
  y: 0,
}}
transition={{
  duration: 0.6,
  delay: 0.5,
}} */}



<motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="absolute h-[320px] w-[320px] bg-lightYellow rounded-full"
  />

  {/* Image */}
  <motion.img 
  initial={{
    opacity: 0,
    x: -100,
    y: 100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
  }}
  whileHover={{
    scale: 1.1, // Slight zoom on hover
    rotate: 5,  // Small rotation effect
  }}
  transition={{
    duration: 0.6,
    delay: 0.5,
  }} 
  src={BannerPng} 
  alt="Delicious Food" 
  className="relative z-10 w-[350px] lg:w-[300px] img-shadow cursor-pointer"
/>

          </div>
          {/* Text Content Section */}
          <motion.div 
            className="space-y-5 lg:max-w-[400px]"
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
          >

             {/* text */}
  <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold uppercase text-gray-900">
              The Best Yummy Food in the Town
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eos
              distinctio facilis sit nisi aut rerum.
            </p>
            <button className="btn-primary">Order Now</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
