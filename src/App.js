import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
//import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';

//includes

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={Products} />
      </div>
      </Router>
    );
  }
}

export default App;
