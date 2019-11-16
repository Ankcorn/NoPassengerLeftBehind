import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Header from './components/Header';
import TrainIcon from '@material-ui/icons/Train';
import WarningIcon from '@material-ui/icons/Warning';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Request from './components/Request';
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
        <div className="mx-6 flex-1 overflow-y-auto">
          <Request
            name="John Doe"
            comment="Need ramp to get on train"
            phone="07492094264"
            start="Birmingham"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1501527022782-000a8cd28122?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[{ staff: 'Alex', done: true }, { staff: 'Jane', done: false }]}
            toc="Ariva Trains London"
            end_time="12:45pm"
            delayed="stop"
          />
          <Request
            name="Jayne Fonda"
            comment="Need some weed"
            phone="07012091114"
            start="Amsterdam"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1536122522160-72ca6bd783ba?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[{ staff: 'Wally', done: true }]}
            start_time=""
            toc="Eurostar"
          />
          <Request
            name="Oleg Porev"
            comment="Bad English"
            phone="07492133764"
            start="Glasgow"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1486648855265-390f3951358d?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[]}
            toc="Ariva Trains London"
            start_time="1:00pm"
            end_time="6:45pm"
          />
          <Request
            name="John John"
            comment="Need ramp to get on train"
            phone="07492094264"
            start="Birmingham"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1501527022782-000a8cd28122?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[{ staff: 'Alex', done: true }, { staff: 'Jane', done: false }]}
            toc="Ariva Trains London"
            end_time="12:45pm"
            delayed="stop"
          />
          <Request
            name="Jayne Fonda"
            comment="Need some weed"
            phone="07012091114"
            start="Amsterdam"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1536122522160-72ca6bd783ba?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[{ staff: 'Wally', done: true }]}
            start_time=""
            toc="Eurostar"
          />
          <Request
            name="Oleg Porev"
            comment="No English"
            phone="07492133764"
            start="Glasgow"
            stop="Liverpool ST"
            pic="https://images.unsplash.com/photo-1486648855265-390f3951358d?ixlib=rb-1.2.1&amp;ixid=xSOfm3S2QQg&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            helping={[{ staff: 'Wally' }]}
            toc="Ariva Trains London"
            start_time="1:00pm"
            end_time="6:45pm"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
