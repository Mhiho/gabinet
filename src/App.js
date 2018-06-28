import React, { Component, PropTypes } from 'react';
import './App.css';
import {List,Map} from 'immutable';
import road from './assets/images/road.jpg';
import Picture from './components/picture/picture';

class App extends Component {
  constructor() {
    super();
}


  render(){
    return (
        <div>
          <Picture />
        </div>
    )
  }

}




export default App;
