import { Card, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {}
}))


export default function Rotation() {
  const classes = useStyles()
  return(
    <Card className={classes.root}>


    </Card>
  )
}