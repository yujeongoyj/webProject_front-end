import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './Projecet_1/Header/Header';
import Middle from './Projecet_1/Middle/Middle';
import Bottom from './Projecet_1/Bottom/Bottom';
import Footer from './Projecet_1/Foofer/Footer';
import MaleClothing from './Projecet_1/pages/MaleClothingPage/1';
import Clothing from './Projecet_1/pages/Clothing/clothing';
import Home from './Projecet_1/pages/Home/Home';
import WomenClothing from './Projecet_1/pages/WomenClothing/2';
import Sho from './Projecet_1/pages/sho/3';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/1" element={<MaleClothing />} />
          <Route path="/2" element={<WomenClothing/>} />
          <Route path="/3" element={<Sho/>} />
          <Route path="/clothing" element={<Clothing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
