import { Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root:{
    width: '100%',
    height: '200px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  flightId: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  flightInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}))


export default function FlightData({data}) {
  const {id, origin, destination, readable_arrival, readable_departure} = data;
  const classes = useStyles();

  return(
    <Card elevation={5} className={classes.root}>
      <CardContent className={classes.container}>
        <Box className={classes.flightId}>
          <Typography variant="body1">
            {`Flight: ${id}`}
          </Typography>
        </Box>
        <Box className={classes.flightInfo}>
          <Typography variant="body1">{`${origin} ${readable_departure}`}</Typography>
          <Typography variant="body1">{`${destination} ${readable_arrival}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}