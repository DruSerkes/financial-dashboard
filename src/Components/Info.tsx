import * as React from 'react';
import { List } from '@material-ui/core';

import { Managers } from './Managers';
import { Quarters } from './Quarters';
import { info } from '../data/fundData'
import { useStyles } from '../styles';

export const Info = () => {
  const classes = useStyles();
  const { managers, quarters } = info;
  return (
    <List className={classes.info}>
      <Managers managers={managers} />
      <Quarters quarters={quarters} />
    </List>
  )
};