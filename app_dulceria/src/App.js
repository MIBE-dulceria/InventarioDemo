import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import inicio from './pages/Inicio';

const appTheme = createMuiTheme(themeFile);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={appTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={inicio} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
