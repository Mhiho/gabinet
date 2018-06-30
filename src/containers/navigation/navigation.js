import React, {Component} from 'react';
import './navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux';
import _ from 'lodash';

class Navigation extends Component {


state = {
  active: 'active'
}

toggleActive(){
  this.setState({active: !this.state.active})
}

componentDidUpdate(){}
render(){
  return(
    <nav>
      <div>
        <div>
          <ul>
            <li className={this.props.activeforAbo} onClick={this.props.aboutMe }>O mnie</li>
            <li className={this.props.activeforAct} >Aktualności</li>
            <li className={this.props.activeforHel} onClick={this.props.help }>Pomoc psychologiczna</li>
            <li>Cennik</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
}

function mapStateToProps(state) {
  return{
    activeforAct: state.activeforAct,
    activeforAbo: state.activeforAbo,
    activeforHel: state.activeforHel
  }
}

function mapDispatchToProps(dispatch) {
  return{
    aboutMe: ()=> dispatch({type: 'ABOUT_ME'}),
    help: () => dispatch({type: 'PSYCHOLOGICAL_HELP'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
