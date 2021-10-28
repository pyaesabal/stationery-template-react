import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/page/Home';
import About from './component/page/About';
import Brands from './component/page/Brands';
import Header from './component/Header';
import Footer from './component/Footer';



const App = () => (
  <Router>
    <Header/>
        
        <Switch>      
          <Route path="/about" component={About}/>
          <Route path="/brands" component={Brands}/>
          <Route path="/" component={Home}/>           
        </Switch>
    <Footer/>
  </Router>
  
);

export default App;