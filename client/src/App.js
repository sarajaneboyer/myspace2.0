import React, { } from 'react';
import './App.css';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Container } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Container>
      <section >
        <Navbar />
      </section>
      <FetchUser>
        <Container>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
      </Container>
      </FetchUser>
    </Container>
  )
};

export default App;
