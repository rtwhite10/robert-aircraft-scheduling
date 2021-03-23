import {
  Box, Card, CardContent, CircularProgress, makeStyles, Typography
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '200px'
  },
  container: {
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function AircraftCard({ data }) {
  const { ident } = data;
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent className={classes.container}>
        <Typography>{ident}</Typography>
        <CircularProgress variant="determinate" value={75} />
      </CardContent>
    </Card>
  );
}

AircraftCard.propTypes = {
  data: PropTypes.element.isRequired
};
