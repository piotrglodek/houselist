import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { House } from './pages/House';
import { Houses } from './pages/Houses';
import { AddHouse } from './pages/AddHouse';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/houses">
        <Houses />
      </Route>
      <Route exact path="/houses/add">
        <AddHouse />
      </Route>
      <Route exact path="/houses/:id">
        <House />
      </Route>
    </Switch>
  );
}

export default App;
