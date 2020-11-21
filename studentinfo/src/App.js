import React from 'react';
import './App.css';
import MainTodo from './components/Todo';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route path='/' exact component={MainTodo}/>
 
      </Switch>
      </Router>
    </div>
  );
}

export default App;