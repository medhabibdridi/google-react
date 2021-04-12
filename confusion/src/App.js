import React, { Component } from 'react';
import Home  from "./pages/Home";
import Search from "./searchPage"
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/search">
              <Search/>
            
             </Route>
          
      <Route path="/">
      <Home/>
      </Route>
          </Switch>
        </Router>
       
      </div>
    );
  }
}

export default App;
