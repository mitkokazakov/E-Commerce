import './App.css';
import { Featured } from './components/Featured';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';


function App() {
  return (
    <div className=" w-full min-h-screen bg-teal-300">
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Featured></Featured>
    </div>
  );
}

export default App;
