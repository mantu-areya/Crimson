import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './OverwriteGlobal.css';

import { Link, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './components/home.component';

class App extends Component {
  render() {
  return(
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">HMM</a>
      </li>
    </ul>
  </div>
</nav>
    <div className="container mt-3">
          <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </div>

  )
  }
}

export default App;


