import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import FlightData from './FlightData'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '800px'
  }
}))


export default function Rotation() {
  const { flight_data } = useSelector(state => state.data)
  const classes = useStyles()

  React.useEffect(() => {console.log(flight_data)},[flight_data])

  return(
    <Grid 
      spacing={4} 
      container 
      direction="column" 
      className={classes.root}
    >
      {flight_data.map((flight, index) => {
        if(index < 3) {
          return (
            <Grid item>
              <FlightData key={flight.id} data={flight} />
            </Grid> 
          )
        }
      })}
    </Grid>
  )
}