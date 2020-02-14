import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Info from './components/info';
import Benefits from './components/benefits';
import Jobs from './components/jobs';
import Home from './components/home';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/benefits">
              <Benefits />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
