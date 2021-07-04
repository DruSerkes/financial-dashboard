import * as React from 'react';
import { List } from '@material-ui/core';

import { Managers } from './Managers';
import { info } from '../data/fundData'
import { useStyles } from '../styles';
// interface InfoProps {} 

export const Info = () => {
  const classes = useStyles();
  return (
    <List className={classes.info}>
      <Managers managers={info.managers} />
    </List>
  )
};