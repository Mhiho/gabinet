import React, { Component, PropTypes } from 'react';
import './App.css';
import {List,Map} from 'immutable';
import Picture from './components/picture/picture';
import Navigation from './containers/navigation/navigation';
import Footer from './containers/footer/footer';

class App extends Component {
  constructor() {
    super();
}


  render(){
    return (
        <div className="App">
          <Navigation />
          <Picture />
          <Footer />
        </div>
    )
  }

}




export default App;
