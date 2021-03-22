import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Aircrafts from './Aircrafts'
import Flights from './Flights'
import Rotation from './Rotation'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '1000px',
    padding: ''
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  container: {
    padding: '1rem'
  }
}))

export default function FlightTracker(){
  const {flight_data, plane_data} = useSelector(state => state)
  const classes = useStyles()
  return(
    <Box className={classes.root}>
      <div className={classes.container}>
        <h1>test</h1>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={3}>
            <Typography align="center" variant="h3">
              Aircrafts
            </Typography>
            <Aircrafts />
          </Grid>
          <Grid item xs={6}>
            <Typography align="center" variant="h3">
              Rotation
            </Typography>
            <Rotation />
          </Grid>
          <Grid item xs={3}>
            <Typography align="center" variant="h3">
              Flights
            </Typography>
            <Flights />
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}