import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Features from './components/Features';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <Features />
    </div>
  );
}

export default App;
