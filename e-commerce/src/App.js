import './App.css';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { MenNavigation } from './components/MenNavigation';
import { MenSweaters } from './components/MenSweaters';
import { MenTshirts } from './components/MenTshirts';
import { NavBar } from './components/NavBar';
import { ProductDetails } from './components/ProductDetails';
import { ShoppingCart } from './components/ShoppingCart';

import { Routes, Route } from 'react-router-dom';
import { WomenNavigation } from './components/WomenNavigation';
import { WomenScarfs } from './components/WomenScarfs';


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

        <Route path='/women' element={<WomenNavigation />} >
          <Route path='tshirts' element={<MenTshirts />} />
          <Route path='sweaters' element={<MenSweaters />} />
          <Route path='hats' element={<MenSweaters />} />
          <Route path='scarfs' element={<WomenScarfs />} />
        </Route>

        <Route path='cart' element={<ShoppingCart/>}/>
      </Routes>

      <Footer></Footer>
      <ProductDetails />
    </div>
  );
}

export default App;
