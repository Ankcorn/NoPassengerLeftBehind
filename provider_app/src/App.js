import React, { useState } from 'react';
import Header from './components/Header';
import Pannel from './components/Pannel'
import Table from './components/Requests';
import Map from './map.png'
import './extra.css'
function App() {
  const [mapOpen, setMapOpen] = useState(false)
  return (
    <div className="h-screen w-screen flex flex-col bg-red-100">
      {mapOpen && <div className="fixed w-screen h-screen bg-gray-100 z-40 flex items-center justify-center" onClick={() => setMapOpen(false)}>
        <div className="bg-gray-900 rounded fixed z-50 p-12">
          <img src={Map} />
        </div>
      </div>
      }
      <Header />
      <div className="flex-1 flex overflow-hidden crazy">
        <Pannel />
        <Table setMapOpen={setMapOpen} />
      </div>
    </div >
  );
}

export default App;
