import React from 'react';
import './App.css';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';


function App () {
  return (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
  )
};

export default App;
