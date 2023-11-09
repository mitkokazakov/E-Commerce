import './App.css';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className=" w-full min-h-screen bg-teal-300">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
