import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';

import Head from './components/Head';
import Footer from './components/Footer';
import Nav from './components/Nav';
import First from './comp-modules/First'
import Second from './comp-modules/Second'
import Third from "./comp-modules/Third";

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
         <Head/>
          <div class="row">
              <div class="col-9">

                  <Route exact path='/First' component={First}/>
                  <Route exact path='/Second' component={Second}/>
                  <Route exact path='/Third' component={Third}/>
              </div>
              <div class="col-3">

              <Nav/>
              </div></div>


          <Footer/>



      </div>
        </Router>

    );
  }
}

export default App;
