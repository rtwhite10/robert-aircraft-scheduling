import { Card, List, makeStyles, ListItem } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import FlightData from './FlightData'
import ScrollableList from '../../../components/ScrollableList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '800px',
  },
  list: {
    width: '100%',
    height: '800px',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    // maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}))


export default function Flights() {
  const { flight_data } = useSelector(state => state.data)
  const classes = useStyles()

  return(
    <Card elevation={5} className={classes.root}>
      <ScrollableList>
        {
          flight_data.map((flight) => (
            <ListItem key={flight.id}>  
              <FlightData data={flight} />
            </ListItem> 
          ))
        }
       </ScrollableList>
    </Card>
  )
}