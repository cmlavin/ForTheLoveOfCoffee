function reviewsReducer(state = {
  user: '',
  cafe: '',
  review: '',
  allReviews: [],
  filteredReviews: []
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
