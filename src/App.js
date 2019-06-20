import React from 'react';
import './App.css';
import { Navbar } from './components';
import MarathonPlan from './views/MarathonPlan';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <MarathonPlan />
    </div>
  );
}

export default App;
