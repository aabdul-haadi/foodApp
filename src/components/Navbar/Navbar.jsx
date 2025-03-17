import React from "react";
import Logo from "../../assets/food/logo.png"; // Ensure the correct path
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Sample navigation menu
const NavMenu = [
  { id: 1, name: "Home", path: "/", delay: 0.1 },
  { id: 2, name: "Menu", path: "/menu", delay: 0.2 },
  { id: 3, name: "About", path: "/about", delay: 0.3 },
  { id: 4, name: "Contact", path: "/contact", delay: 0.4 },
];

// Animation function
const SlideDown = (delay) => ({
  initial: { y: "-100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, delay } 
  },
});

const Navbar = () => {
  return (
    <nav className=" bg-lightYellow bg-opacity-10 backdrop-blur-md">
      <div className="container flex justify-between items-center font-league py-4">
        
        {/* Logo Section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="Logo"
          className="w-36"
        />

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => (
              <motion.li 
                key={menu.id}
                className="nav-menu"
                variants={SlideDown(menu.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
              <a href={menu.path} className="inline-block px-4 py-2 text-xl font-bold text-gray-700 hover:text-blue-500 transition-all">
  {menu.name}
</a>

              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cart Icon */}
        <div className="text-3xl text-gray-700">
          <IoCartOutline className="cursor-pointer hover:text-gray-500 transition-all" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
