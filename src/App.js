import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Mobile from './Components/Mobile';
import Desktop from './Components/Desktop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
     <Header />
     <Switch>
      <Route exact path="/">
         <Home />
      </Route>
      <Route path="/mobile-wallpapper">
         <Mobile />
      </Route>
      <Route path="/desktop-wallpapper">
         <Desktop />
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
