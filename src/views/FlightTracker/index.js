import {
  Box, Grid, LinearProgress, makeStyles, Paper, Typography
} from '@material-ui/core';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addFlightToRotation, addRotationToFlights, updatedFlightOrderOnDrop } from '../../redux/actions/appActions';
import Aircrafts from './Aircrafts';
import Flights from './Flights';
import Rotation from './Rotation';
import RotationSchedule from '../../components/RotationSchedule';

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
}));

const state = {};

const localReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return {
        ...state,
        plane_data: action.payload.plane_data,
        flight_data: action.payload.flight_data
      };
    default: return state;
  }
};

export default function FlightTracker() {
  const { localState, localDispatch } = React.useReducer(localReducer, state);
  const { flight_data, plane_data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDrop = (results) => {
    const { destination, source } = results;
    if (destination.droppableId === 'flights' && source.droppableId === 'flights') {
      dispatch(updatedFlightOrderOnDrop(results));
    } else if (destination.droppableId === 'rotation' && source.droppableId === 'flights') {
      dispatch(addFlightToRotation(results));
    } else if (destination.droppableId === 'flights' && source.droppableId === 'rotation') {
      dispatch(addRotationToFlights(results));
    }
  };

  return (
    <Box className={classes.root}>
      <div className={classes.container}>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={3}>
            <Typography align="center" variant="h3">
              Aircrafts
            </Typography>
            <Aircrafts />
          </Grid>
          <DragDropContext onDragEnd={handleDrop}>
            <Grid item xs={6}>
              <Typography align="center" variant="h3">
                Rotation
              </Typography>
              <Rotation />
              <RotationSchedule />
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h3">
                Flights
              </Typography>
              <Flights />
            </Grid>
          </DragDropContext>
        </Grid>
      </div>
    </Box>
  );
}
