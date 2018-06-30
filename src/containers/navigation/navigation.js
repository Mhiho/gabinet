import React, {Component} from 'react';
import './navigation.css';
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
            <li onClick={ this.props.aboutMe }>O mnie</li>

            <li>Pomoc psychologiczna</li>
            <li>Cennik</li>
            <li>Kontakt</li>
          </ul>

          { this.props.aboutShow ?
          this.props.content.map((text,index)=>
          <div className="aboutMe"
            key={index}>
          {text}
          </div>
        ) : null
          }
        </div>
      </div>
    </nav>
  )
}
}

function mapStateToProps(state) {
  return{
    content: state.content,
    aboutShow: state.aboutShow
  }
}

function mapDispatchToProps(dispatch) {
  return{
    aboutMe: ()=> dispatch({type: 'ABOUT_ME'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
