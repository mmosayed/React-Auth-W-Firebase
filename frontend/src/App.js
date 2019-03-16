import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Logout from './containers/logout';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={ Header } />
          <div className='container mt-5'>
            <Route path='/' exact component={ Home } />
            <Route path='/signup' exact component={ Signup } />
            <Route path='/login' exact component={ Login } />
            <Route path='/logout' exact component={ Logout } />
          </div>
        </>
      </HashRouter>
    );
  }
}

export default App;
