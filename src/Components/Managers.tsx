import * as React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Divider, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore, PersonOutline } from '@material-ui/icons';

import { ManagerType } from '../data/dataTypes';
import { useStyles } from '../styles';
const { useState } = React;

interface ManagersProps {
  managers: ManagerType[]
}

export const Managers: React.FC<ManagersProps> = ({ managers }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const handleShowManagers = () => setIsOpen(!isOpen);
  return (
    <>
      <ListItem button onClick={handleShowManagers} className={classes.topLine}>
        <ListItemIcon>
          <PersonOutline />
        </ListItemIcon>
        <ListItemText primary="Managers" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} unmountOnExit>
        <List className="Managers-List" disablePadding>
          {managers.map(manager => {
            return (<>
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
            </>)
          })}
        </List>
      </Collapse>
    </>
  )
};