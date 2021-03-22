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
}))

export default function AircraftCard({ data }) {
  const { ident } = data;
  const classes = useStyles();
  return(
    <Card elevation={5} className={classes.root}>
      <CardContent className={classes.container}>
        <Typography>{ident}</Typography>
      </CardContent>
    </Card>
  )
}