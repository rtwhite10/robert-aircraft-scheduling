import {
  Box, Card, CardContent, Grid, List, ListItem, makeStyles, Typography
} from '@material-ui/core';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import FlightData from './FlightData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  list: {
    width: '100%',
    height: '700px',
    position: 'relative',
    overflow: 'auto',
    paddingTop: 0
  },
  listItem: {
    '&:nth-child(1)': {
      paddingTop: 0
    },
  },
  ul: {
    backgroundColor: 'inherit',
    height: '700px',
    padding: 0
  },
  helperCard: {
    width: '100%',
    height: '200px',
    opacity: '0.6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Rotation() {
  const { rotation } = useSelector((state) => state.data);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Droppable droppableId="rotation">
        {(provided) => (
          <List className={classes.list} {...provided.droppableProps} ref={provided.innerRef}>
            {
        rotation.length !== 0
          ? rotation.map((flight, index) => (
            <Draggable key={flight.id} draggableId={flight.id} index={index}>
              {(provided) => (
                <ListItem className={classes.listItem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <FlightData key={flight.id} data={flight} />
                </ListItem>
              )}
            </Draggable>
          ))
          : (
            <ListItem className={classes.listItem}>
              <Card className={classes.helperCard}>

                <Box>
                  <AddIcon style={{ fontSize: '40px' }} />
                </Box>
                <Typography variant="body1">
                  Drag a flight card to create a rotation.
                </Typography>

              </Card>
            </ListItem>
          )
        }
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Box>
  );
}
