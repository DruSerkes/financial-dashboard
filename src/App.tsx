import * as React from 'react';
import { Navbar } from './Components/Navbar';
import { useStyles } from './styles';
import { Container, Typography } from '@material-ui/core';
import './App.css';

// TODO 
// Build a financial dashboard with data and UI resembling this tutorial, but with recharts and your own spin 
// tutorial: https://www.telerik.com/blogs/lets-build-a-financial-dashboard-with-react?utm_medium=cpm&utm_source=jsweekly&utm_campaign=kendo-ui-react-blog-fin-dashboard&utm_content=sponsored-link#step-2-adding-ui-components
// github: https://github.com/tjvantoll/financial-dashboard/tree/start

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Navbar />

      <Container className={classes.main} component="main">
        <Typography variant="h1">My Financial Dashboard</Typography>

      </Container>
    </div>
  );
};
