import React from 'react';
import UserLogin from './Components/UserLogin';
import Table from "./Components/Table";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
const App = () => {

return(
    <div>
        <Router>
        <Switch>
        <UserLogin path = "/" exact component = {UserLogin}/>
        <Route path = "/Table" component = {Table}/>
        </Switch>
        </Router>
  </div>
);
}

export default App;
