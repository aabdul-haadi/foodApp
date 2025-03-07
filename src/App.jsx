import React from "react";
import Navbar from "./components/Navbar/Navbar"; // ✅ Correct default import
import Hero from "./components/Hero/Hero"; // ✅ Import Hero component
import HotDessert from "./components/HotDessert/HotDessert";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <HotDessert /> 
      </div>
    </div>
  );
};

export default App;
