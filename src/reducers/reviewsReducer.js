function reviewsReducer(state = {
  user: '',
  cafe: '',
  review: '',
  allReviews: ['Review 1', 'Review 2'],
  filteredReviews: [],
  filteredCafes: []
  }, action) {
  switch(action.type) {
    case "ADD_REVIEW":
      return Object.assign({}, state, {review: action.review})
    case "UPDATE_REVIEW":
      return Object.assign({}, state, {review: action.review})
    case "DELETE_REVIEW":
      return Object.assign({}, state, {review: ''})
    default:
      return state
  }
}

export default reviewsReducer
