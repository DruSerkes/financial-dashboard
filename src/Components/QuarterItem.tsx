import * as React from 'react';
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { ArrowDropUpOutlined, ArrowDropDownOutlined } from '@material-ui/icons';

import { QuarterDataType } from '../data/dataTypes';
import { QuarterDetail } from './QuarterDetail';
import { useStyles } from '../styles';

interface QuarterItemProps {
  quarter: QuarterDataType,
  handleShowDetail: (quarter: QuarterDataType) => void
}

export const QuarterItem: React.FC<QuarterItemProps> = ({ quarter, handleShowDetail }) => {
  const classes = useStyles();
  const handleClick = () => handleShowDetail(quarter);
  return (
    <>
      <ListItem alignItems="flex-start" className={classes.nested}>
        <ListItemText
          primary={
            <Typography>
              {quarter.title}
              {quarter.show
                ? <ArrowDropUpOutlined data-testid="arrow-dropup" onClick={handleClick} />
                : <ArrowDropDownOutlined onClick={() => handleShowDetail(quarter)} />}
            </Typography>
          }
          secondary={<QuarterDetail details={quarter.details} show={quarter.show} />}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
};