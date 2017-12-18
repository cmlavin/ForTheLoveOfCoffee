export const addReview = (review) => {
  return {
    type: "ADD_REVIEW",
    payload: review
  }
}

export const updateReview = (review) => {
  return {
    type: "UPDATE_REVIEW",
    payload: review
  }
}

export const deleteReview = (review) => {
  return {
    type: "DELETE_REVIEW",
    payload: review
  }
}
