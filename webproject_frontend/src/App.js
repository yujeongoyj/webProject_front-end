import React from 'react';
import './App.scss';
import Header  from './Header';
import Middle from './Middle';
import Bottom from './Bottom';

function App() {
  return (
   <div className="App">
      <Header/>
      <Middle/>
      <Bottom/>
   </div>
  );
}

export default App;