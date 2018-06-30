import React, { Component, PropTypes } from 'react';
import './App.css';
import {List,Map} from 'immutable';
import Picture from './components/picture/picture';
import Navigation from './containers/navigation/navigation';
import Footer from './containers/footer/footer';
import {connect} from 'react-redux';
import Content from './containers/Content/Content';

class App extends Component {
  constructor() {
    super();
}


  render(){
    return (
        <div className="App">
          <Navigation />
          <div>
            <Content />
          </div>
          <div>
            <Picture />
          </div>
          <Footer />
        </div>
    )
  }

}

function mapStateToProps(state){
  return{
    aboutShow: state.aboutShow
  }
}


export default connect(mapStateToProps,null)(App);
