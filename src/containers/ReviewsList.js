import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux';

class ReviewsList extends React.Component {

  render(){
    return(
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewsList)
