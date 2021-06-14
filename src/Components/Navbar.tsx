import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu, MoreVert } from '@material-ui/icons';
import { useStyles } from '../styles';

// interface NavbarProps { }

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}
        >
          Stocks
        </Typography>
        <IconButton aria-label="display more actions" edge="end" color="inherit">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};