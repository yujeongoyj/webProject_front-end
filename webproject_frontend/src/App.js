import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Projecet_1/pages/Login';
import MainPage from './Projecet_1/pages/MainPage';
import SignUp from './Projecet_1/pages/SignUp';
import AddProduct from './Projecet_1/pages/AddProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/AddProduct" element={<AddProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
