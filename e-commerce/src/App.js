import './App.css';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenNavigation } from './components/MenNavigation';
import { MenProducts } from './components/MenProducts';
import { MenSweaters } from './components/MenSweaters';
import { MenTshirts } from './components/MenTshirts';
import { NavBar } from './components/NavBar';
import { ShoppingCart } from './components/ShoppingCart';

import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


function App() {



  return (
    <div className=" w-full min-h-screen">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenNavigation />} >
          <Route path='tshirts' element={<MenTshirts />} />
          <Route path='sweaters' element={<MenSweaters />} />
        </Route>
      </Routes>

      <Footer></Footer>
      <ShoppingCart />
    </div>
  );
}

export default App;
