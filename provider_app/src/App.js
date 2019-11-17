import React from 'react';
import Header from './components/Header';
import Pannel from './components/Pannel'
import Table from './components/Requests';
import './extra.css'
function App() {

  return (
    <div className="h-screen w-screen flex flex-col bg-red-100">
      <Header />
      <div className="flex-1 flex overflow-hidden crazy">
        <Pannel />
        <Table />
      </div>
    </div>
  );
}

export default App;
