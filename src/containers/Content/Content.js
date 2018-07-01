import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Content.css';


class Content extends Component {


  render(){
    return(
      <div className="Content">
      {
      this.props.content.map((text,index)=>(
      <div className="paragraf" key={index}>
        {text}
      </div>))
    }
    </div>
    )
  }

}


function mapStateToProps(state) {
  return{
    content: state.content
  }
}

export default connect(mapStateToProps,null)(Content);
