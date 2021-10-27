import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/page/Home';
import About from './component/page/About';
import Header from './component/Header';
import Footer from './component/Footer';



const App = () => (
  <Router>
    <Header/>
        
        <Switch>      
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    <Footer/>
  </Router>
  
);

export default App;