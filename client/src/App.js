import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from "reactstrap";
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { RouteMovies } from './components/Movies';
import { Actors } from './components/Actors';
import { AddActor } from './components/Forms/AddActor';
import './App.css';

function App() {
  const { loading, user } = useAuth0;

  if (loading && !user) {
    return <p>Loading...</p>
  }
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column w-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movies' component={RouteMovies} />
            <Route path='/actors' component={Actors} />
            <Route path='/actors/add-actor' component={AddActor} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
