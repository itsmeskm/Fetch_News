import './App.css';

import React, { Component } from 'react'
import News from './Components/News';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
          <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    )
  }
}

