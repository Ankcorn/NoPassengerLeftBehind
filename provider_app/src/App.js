import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Header from './components/Header';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Pannel from './components/Pannel'

const passengers = gql`
query {
  passengerById(id: 1) {
    firstName
  }
}
`
function App() {
  const { data, loading } = useQuery(passengers)

  if (loading) {
    return <p>...loading</p>
  }
  return (
    <div className="h-screen w-screen flex flex-col bg-red-100">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Pannel />
        <div className="m-12 mx-24 flex-1 overflow-y-auto">
          <article className="bg-white block w-auto px-4 py-2 rounded-lg shadow flex w-full">
            <img src="https://images.unsplash.com/photo-1501527022782-000a8cd28122?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" alt="" className="h-24 w-24 rounded-full object-cover border-white border-width-2 self-center" />
            <div className="container mx-auto px-6 self-center">
              <p className="p-1 text-lg">John Doe</p>
              <p className="p-1">Needs Ramp to get on Train</p>
              <a className="p-1 text-blue-600" href="tel:07492094264">07492094264 <PhonelinkRingIcon /></a>
            </div>
            <div className="container mx-auto flex-1 w-auto flex-no-wrap flex flex-col">
              <div className="flex items-baseline">
                <label className="text-xs text-gray-700 mx-1">Start:</label>
                <p className="text-gray-900 mx-1 my-2">Basingstoke</p>
              </div>
              <div className="flex items-baseline">
                <label className="text-xs text-gray-700 mx-1">Destination:</label>
                <p className="text-gray-900 mx-1 my-2">Manchester</p>
              </div>
              <div className="flex items-baseline">
                <label className="text-xs text-gray-700 mx-1">Provider:</label>
                <p className="text-gray-900 mx-1 my-2">Ariva Trains London</p>
              </div>
            </div>
            <div className="container mx-auto"><span className="">Close To Destination</span></div>
            <button className="self-end"><KeyboardArrowDownIcon /></button>

          </article>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
