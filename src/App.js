import './styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {NavBar} from './components/shared'
import {Home} from './components/Home';
import {About} from './components/About'
import {PageNotFound} from './components/PageNotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar links={[
            {routeName: 'Home', routePath: '/'},
            {routeName: 'About', routePath: '/About'},
            {routeName: 'Gallery', routePath: '/Gallery'}
            ]}>
          </NavBar>

          <hr />

          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/*' element={<PageNotFound/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

