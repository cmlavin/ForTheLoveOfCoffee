import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux';

class CafesList extends React.Component {

  createCafeList = () => {
    return this.props.cafes.map(cafe => cafe)
  }

  render(){
    return(
      <div>
        {this.createCafeList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cafes: state.cafes
  }
}

export default connect(mapStateToProps)(CafesList)
