import * as React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore, InfoOutlined } from '@material-ui/icons';

import { QuarterType } from '../data/dataTypes';
import { useStyles } from '../styles';
import { QuarterItem } from './QuarterItem';
const { useState } = React;

interface QuartersProps {
  quarters: QuarterType[]
}

export const Quarters: React.FC<QuartersProps> = ({ quarters }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [quartersData, setQuartersData] = useState(quarters.map(quarter => ({ ...quarter, show: false })));
  const handleShowQuarters = () => setIsOpen(!isOpen);
  const handleShowDetail = (quarter: QuarterType) => {
    const newQuartersData = quartersData.map(qtr => (qtr === quarter ? { ...qtr, show: !qtr.show } : { ...qtr, show: false }));
    setQuartersData(newQuartersData);
  };
  return (
    <>
      <ListItem button onClick={handleShowQuarters} className={classes.topLine}>
        <ListItemIcon>
          <InfoOutlined />
        </ListItemIcon>
        <ListItemText primary="Quarters" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} unmountOnExit>
        <List className="Quarters-List" disablePadding>
          {quartersData.map(quarter => (<QuarterItem quarter={quarter} handleShowDetail={handleShowDetail} />)
          )}
        </List>
      </Collapse>
    </>
  )
};