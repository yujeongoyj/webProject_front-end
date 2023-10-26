import React from 'react';
import Header  from './Projecet_1/Header/Header'
import Middle from './Projecet_1/Middle/Middle'
import Bottom from './Projecet_1/Bottom/Bottom';
import Footer from './Projecet_1/Foofer/Footer';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './Projecet_1/pages/Login';


function App() {
  return (
  <Router>
   <div className="App">
    <Routes>
     <Route path="/login" component={Login} />
    </Routes>
      <Header/>
      <Middle/>
      <Bottom/>
      <Footer/>
   </div>
  </Router>
  );
}

export default App;