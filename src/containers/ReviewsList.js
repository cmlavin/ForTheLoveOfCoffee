import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addReview, updateReview, deleteReview} from '../actions/reviewsAction'
import Header from '../Header'
import Review from '../components/Review'

class ReviewsList extends React.Component {

  createReviewsListItems() {
    return(
      this.props.reviews.allReviews.map((review, i) => {return(<li key={i}><Review review={review}/></li>)})
    )
  }

  render() {
    return(
      <div>
        <Header />
        <div>
          <ul>
            {this.createReviewsListItems()}
          </ul>
        </div>
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
