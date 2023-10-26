import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './Projecet_1/Header/Header';
import Middle from './Projecet_1/Middle/Middle';
import Bottom from './Projecet_1/Bottom/Bottom';
import Footer from './Projecet_1/Foofer/Footer';
import MaleClothing from './Projecet_1/pages/MaleClothingPage/MaleClothingPage';
import Clothing from './Projecet_1/pages/Clothing/clothing';
import Home from './Projecet_1/pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Use Routes component and nest Route components inside it */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/maleClothing" element={<MaleClothing />} />
          <Route path="/clothing" element={<Clothing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
