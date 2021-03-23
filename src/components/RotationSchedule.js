import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 100,
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}));

export default function RotationSchedule() {
  const { rotation } = useSelector((state) => state.data);
  const classes = useStyles();
  // const someday = moment.utc(21600 * 1000)
  //   .format('HH:mm');
  return (
    <>

    </>
  );
}
