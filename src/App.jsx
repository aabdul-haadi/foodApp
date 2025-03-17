import React from "react";
import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero"; 
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner"; 
import { PopularRecipe } from "./components/PopularRecipe/PopularRecipe";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <HotDessert /> 
        <Banner /> 
        <PopularRecipe />
      </div>
    </div>
  );
};

export default App;
