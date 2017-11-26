export function addReview(review) {
  return {
    type: "ADD_REVIEW",
    review
  }
}

export function updateReview(review) {
  return {
    type: "UPDATE_REVIEW",
    review
  }
}

export function deleteReview(review) {
  return {
    type: "DELETE_REVIEW",
    review
  }
}
