import './App.css';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenProducts } from './components/MenProducts';
import { NavBar } from './components/NavBar';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className=" w-full min-h-screen">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenProducts />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
