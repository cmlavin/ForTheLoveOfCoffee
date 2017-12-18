import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux';
import {addReview, updateReview, deleteReview} from '../actions/reviewsAction'

class ReviewsList extends React.Component {
  createReviewsListItems() {
    return(
      this.props.reviews.map((review, i) => {return(<li key={i}>{review.content}</li>)})
    )
  }

  render() {
    return(
      <div>
        <ul>
          {this.createReviewsListItems()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addReview,
    updateReview,
    deleteReview
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList)
