import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getFlightData, getPlaneData} from './redux/actions/dataActions'
import { Container, makeStyles } from '@material-ui/core';
import FlightTracker from './views/FlightTracker';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
}))

function App() {
  const data = useSelector(state => state.data.flight_data)
  const dispatch = useDispatch();
  const classes = useStyles()


  React.useEffect(() => {
    dispatch(getFlightData())
    dispatch(getPlaneData())
  },[])

  return (
    <div className={classes.root}>
      {data && 
        <Container maxWidth="xl">
          <FlightTracker />
        </Container>
      }   
    </div>
  );
}

export default App;
