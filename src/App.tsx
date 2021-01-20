import React from 'react';
import { Container, createMuiTheme, ThemeProvider, Grid, Box, makeStyles, Button } from '@material-ui/core';

import useQuoteStore from './useQuoteStore';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#efe9e7',
    minHeight: '100vh',
  },
  maxWidth: {
    maxWidth: '100%',
  },
  title: {
    color: '#111344',
  },
  subtitle: {
    color: '#52154e',
  },
  quote: {
    color: '#111344',
  },
});

const theme = createMuiTheme({
  spacing: 4,
});

function App() {
  const classes = useStyles();
  const { quote, randomize } = useQuoteStore();

  const quoteText = quote.text;
  const quoteAuthor = quote.author === 'NULL' ? 'Anonymous' : quote.author;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Container>
          <Grid container direction="column" justify="center" alignItems="center" className={classes.maxWidth}>
            <Box m={20} className={classes.maxWidth}>
              <Grid item justify="center" alignItems="center">
                <h1 className={classes.title}>Random Quotes App</h1>
                <h2 className={classes.subtitle}>Aviciena Santoso</h2>
              </Grid>
              <Grid item justify="center" alignItems="center">
                <p className={classes.quote}>{quoteText}</p>
                <p className={classes.quote}>{quoteAuthor}</p>
              </Grid>
              <Grid item justify="center" alignItems="center">
                <Button onClick={randomize}>Get a new quote</Button>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
