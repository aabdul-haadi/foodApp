import React from "react";
import Navbar from "./components/Navbar/Navbar"; // ✅ Correct default import
import Hero from "./components/Hero/Hero"; // ✅ Import Hero component

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
