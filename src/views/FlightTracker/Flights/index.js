import { Card, List, makeStyles, ListItem } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import FlightData from './FlightData'
import ScrollableList from '../../../components/ScrollableList'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'

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
  listItem: {}
}))


export default function Flights() {
  const { flight_data } = useSelector(state => state.data)
  const classes = useStyles()

  return(
    <Card elevation={5} className={classes.root}> 
      <Droppable droppableId="flights">
      {(provided) => (
        <List className={classes.list} {...provided.droppableProps} ref={provided.innerRef}>
          {
            flight_data.map((flight, index) => (
              <Draggable key={flight.id}  draggableId={flight.id} index={index}>
                {(provided) => (
                  <ListItem className={classes.listItem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>  
                    <FlightData data={flight} />
                  </ListItem> 
                )}
              </Draggable>
            ))
          }
          {provided.placeholder}
        </List>
      )}
       </Droppable>
    </Card>
  )
}