import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Projecet_1/Header/Header';
import Middle from './Projecet_1/Middle/Middle';
import Bottom from './Projecet_1/Bottom/Bottom';
import Footer from './Projecet_1/Foofer/Footer';
import MaleClothing from './Projecet_1/pages/MaleClothingPage/1';
import Clothing from './Projecet_1/pages/Clothing/clothing';
import Home from './Projecet_1/pages/Home/Home';
import WomenClothing from './Projecet_1/pages/WomenClothing/2';
import Sho from './Projecet_1/pages/sho/3';
import Login from './Projecet_1/pages/Login';
import SignUp from './Projecet_1/pages/SignUp';
import AddProduct from './Projecet_1/pages/AddProduct';
import ProductDetail from './Projecet_1/pages/ProductDetail'; // 추가

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/1" element={<MaleClothing />} />
          <Route path="/2" element={<WomenClothing />} />
          <Route path="/3" element={<Sho />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/product/{id}" element={<ProductDetail />} /> {/* 이동 */}
          <Route path="/" element={<Bottom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
