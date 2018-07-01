import React, {Component} from 'react';
import './navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux';
import _ from 'lodash';

class Navigation extends Component {

componentDidUpdate(){}
render(){
  return(
    <nav>
      <div>
        <div>
          <ul>
            <li className={this.props.activeforAbo} onClick={this.props.aboutMe }>O mnie</li>
            <li className={this.props.activeforAct} onClick={this.props.actualities}>Aktualności</li>
            <li className={this.props.activeforHel} onClick={this.props.help }>Pomoc psychologiczna</li>
            <li className={this.props.activeforPri} onClick={this.props.prices}>Cennik</li>
            <li className={this.props.activeforCon} onClick={this.props.contact}>Kontakt</li>
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
    activeforHel: state.activeforHel,
    activeforPri: state.activeforPri,
    activeforCon: state.activeforCon
  }
}

function mapDispatchToProps(dispatch) {
  return{
    aboutMe: ()=> dispatch({type: 'ABOUT_ME'}),
    help: () => dispatch({type: 'PSYCHOLOGICAL_HELP'}),
    prices: () => dispatch({type: 'PRICES'}),
    contact: () => dispatch({type: 'CONTACT'}),
    actualities: () => dispatch({type: 'ACTUALITIES'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
