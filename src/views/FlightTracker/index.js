import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Aircrafts from './Aircrafts'
import Flights from './Aircrafts'
import Rotation from './Aircrafts'

export default function FlightTracker(){
  const {flight_data, plane_data} = useSelector(state => state)
  return(
    <Grid container>
      <Grid item>
        <Aircrafts />
      </Grid>
      <Grid item>
        <Flights />
      </Grid>
      <Grid item>
        <Rotation />
      </Grid>
    </Grid>
  )
}