import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Aircrafts from './Aircrafts'
import Flights from './Flights'
import Rotation from './Rotation'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function FlightTracker(){
  const {flight_data, plane_data} = useSelector(state => state)
  const classes = useStyles()
  return(
    <Paper elevation={1} className={classes.root}>
      <div className={classes.root}>
        <h1>test</h1>
        <Grid container direction="row">
          <Grid item xs={4}>
            <Typography align="center" variant="h3">
              Aircrafts
            </Typography>
            <Aircrafts />
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" variant="h3">
              Rotation
            </Typography>
            <Flights />
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" variant="h3">
              Flights
            </Typography>
            <Rotation />
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
}