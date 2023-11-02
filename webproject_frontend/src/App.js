import React from 'react';

import Login from './Projecet_1/pages/Login';
import MainPage from './Projecet_1/pages/MainPage';
import SignUp from './Projecet_1/pages/SignUp';
import AddProduct from './Projecet_1/pages/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './Projecet_1/Header/Header';
import Middle from './Projecet_1/Middle/Middle';
import Bottom from './Projecet_1/Bottom/Bottom';
import Footer from './Projecet_1/Foofer/Footer';
import MaleClothing from './Projecet_1/pages/CategoryMenu/MaleClothingPage/1';
import Clothing from './Projecet_1/pages/Clothing/clothing';
import Home from './Projecet_1/pages/Home/Home';
import WomenClothing from './Projecet_1/pages/CategoryMenu/WomenClothing/2';
import Sho from './Projecet_1/pages/CategoryMenu/sho/3';
import WalletBag from './Projecet_1/pages/CategoryMenu/WalletBag/4';
import Digital from './Projecet_1/pages/CategoryMenu/Digital/5';
import Dailykitchenutensils from './Projecet_1/pages/CategoryMenu/Dailykitchenutensils/6';
import Book from './Projecet_1/pages/CategoryMenu/Book/7';
import Clock from './Projecet_1/pages/CategoryMenu/Clock/8';
import Jewelry from './Projecet_1/pages/CategoryMenu/Jewelry/9';


function App() {
  return (
    <Router>
      <div className="App">
       
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/1" element={<MaleClothing />} />
          <Route path="/2" element={<WomenClothing/>} />
          <Route path="/3" element={<Sho/>} />
          <Route path="/4" element={<WalletBag/>} />
          <Route path="/5" element={<Digital/>} />
          <Route path="/6" element={<Dailykitchenutensils/>} />
          <Route path="/7" element={<Book/>} />
          <Route path="/8" element={<Clock/>} />
          <Route path="/9" element={<Jewelry/>} />
          <Route path="/clothing" element={<Clothing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
