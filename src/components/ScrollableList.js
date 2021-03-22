import { Card, List, makeStyles, ListItem } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({

  list: {
    width: '100%',
    height: '800px',
    position: 'relative',
    overflow: 'auto',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}))


export default function Flights({children}) {
  const classes = useStyles()

  return(
    <List className={classes.list}>
      <ul className={classes.ul}>
      {children}
      </ul>
    </List>
  )
}