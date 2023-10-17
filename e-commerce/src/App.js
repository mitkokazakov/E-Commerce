import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className=" w-full min-h-screen bg-teal-300">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
}

export default App;
