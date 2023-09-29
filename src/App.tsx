import Navbar from "./assets/components/Navbar";
import Collaboration from "./assets/sections/Collaboration";
import Footer from "./assets/sections/Footer";
import Productivity from "./assets/sections/Productivity";
import Security from "./assets/sections/Security";
import Hero from "./assets/sections/hero";

function App() {
  return (
    <>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar/>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div className="relative">
          <img src="hero-bg.webp" alt="" width="4377" className="absolute top-0 transition ease-in duration-200  max-xl:right-[-1050px]   xl:right-[-970px] image" />
        </div>
        <div className="hero-section px-3">
<Hero/>
<div className="px-4 pt-0 overflow-hidden " id="productivity"></div>
<Productivity/>
<Collaboration/>
<Security/>
<Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
