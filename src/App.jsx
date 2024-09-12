import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hightlight from "./components/Hightlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Hightlight />
      <Model />
      <Features />
      <HowItWork />
    </div>
  );
};

export default App;
