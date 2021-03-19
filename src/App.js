import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import {getFlightData, getPlaneData} from './redux/actions/dataActions'
import { Container } from '@material-ui/core';
import FlightTracker from './views/FlightTracker';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFlightData())
    dispatch(getPlaneData())
  },[])

  return (
    <div className="App">
      <Container maxWidth="lg">
        <FlightTracker />
      </Container>
    </div>
  );
}

export default App;
