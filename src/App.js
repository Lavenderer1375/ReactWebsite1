import React from 'react';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import News from './Components/Pages/News';
import Brands from './Components/Pages/Brands';
import Business from './Components/Pages/Business';
import Designers from './Components/Pages/Designers';
import Models from './Components/Pages/Models';
import Tips from './Components/Pages/Tips';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/News' component={News}/>
        <Route path='/Brands' component={Brands}/>
        <Route path='/Business' component={Business}/>
        <Route path='/Designers' component={Designers}/>
        <Route path='/Models' component={Models}/>
        <Route path='/Tips' component={Tips}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
