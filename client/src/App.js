import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from "reactstrap";
import { useAuth0 } from './react-auth0-spa';
import history from './utils/history';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Movies } from './components/Movies';
import { Actors } from './components/Actors';
import './App.css';

function App() {
  const { loading } = useAuth0;

  if (loading) {
    return 'Loading...'
  }
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column w-100">
        <NavBar/>
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/actors' component={Actors} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
