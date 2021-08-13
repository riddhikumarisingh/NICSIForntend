import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom"
import Register from './pages/RegistrationPage/Register.js';

const App = () =>{
  return (
    <>
    <Router>
      <Switch>

        <Route exact path="/">
          <Register/>
        </Route>

      </Switch>
    </Router>
    </>
  );
}
export default App;
