import { Box, Card, ListItem, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import AircraftCard from './AircraftCard'
import ScrollableList from '../../../components/ScrollableList'

const useStyles = makeStyles((theme) => ({
  root: {
    height:'800px',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  container: {
    width:'100%',
    height:'100%',
  }
}))

export default function Aircrafts() {
  const { plane_data } = useSelector(state => state.data)
  const classes = useStyles()

  React.useEffect(() => {console.log(plane_data)},[])

  return(
    <Card elevation={5} className={classes.root}>
      <ScrollableList>
      { plane_data && plane_data.map((plane) => (
        <ListItem key={plane.id}>  
          <AircraftCard key={plane.ident} data={plane}/>
        </ListItem> 
      )) }
      </ScrollableList>
    </Card>
  )
}