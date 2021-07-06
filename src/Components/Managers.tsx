import * as React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore, PersonOutline } from '@material-ui/icons';

import { Manager } from './Manager';
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
        {isOpen ? <ExpandLess /> : <ExpandMore data-testid="expand" />}
      </ListItem>
      <Collapse in={isOpen} unmountOnExit>
        <List className="Managers-List" disablePadding>
          {managers.map(manager => {
            return (<Manager manager={manager} key={`${manager.firstName}-${manager.lastName}`} />)
          })}
        </List>
      </Collapse>
    </>
  )
};