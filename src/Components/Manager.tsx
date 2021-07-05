import * as React from 'react';
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

import { ManagerType } from '../data/dataTypes';
import { useStyles } from '../styles';

interface ManagerProps {
  manager: ManagerType
}

export const Manager: React.FC<ManagerProps> = ({ manager }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start" className={classes.nested}>
        <ListItemText
          primary={`${manager.firstName} ${manager.lastName}`}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              {manager.position}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
};