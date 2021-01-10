import React from 'react'
import './App.css';
import './index.css';
import Header from './Componants/Header'
import Footer from './Componants/Footer'
import Body from './Componants/Body'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="Background">
    <Header />
      <Body />
     </div>
  );
}

export default App;

