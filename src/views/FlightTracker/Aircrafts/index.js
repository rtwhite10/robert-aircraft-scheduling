import { Box, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import AircraftCard from './AircraftCard'

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100%',
    width:'100%',
  },
  container: {
    width:'100%',
    height:'100%',
  }
}))

export default function Aircrafts() {
  const classes = useStyles()
  return(
    <Card className={classes.root}>
      <Box className={classes.container}>
        <AircraftCard />
      </Box>
    </Card>
  )
}