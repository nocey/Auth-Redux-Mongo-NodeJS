import React from 'react';
import Nav from '../nav/Nav'
import Home from '../home/Home'
import Signup from '../signup/Signup'
import Login from '../login/Login';
import {
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme ,ThemeProvider } from '@material-ui/core';
function App() {
  const a = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })
  return (
    <div className="">
      <ThemeProvider theme={a}>
      <Nav/>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;
