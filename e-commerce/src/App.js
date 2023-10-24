import './App.css';
import { Discount } from './components/Discount';
import { FeaturedAndArrivals } from './components/FeaturedAndArrivals';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';


function App() {
  return (
    <div className=" w-full min-h-screen bg-teal-300">
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <FeaturedAndArrivals title="Featured Prodcuts" descr="Summer Collection New Modern Design"></FeaturedAndArrivals>
      <Discount></Discount>
      <FeaturedAndArrivals title="New Arrivals" descr="Summer Collection New Modern Design"></FeaturedAndArrivals>
      <Footer></Footer>
    </div>
  );
}

export default App;
