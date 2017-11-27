function cafesReducer(state = {}, action) {
  switch(action.type) {
    case "ADD_CAFE":
      return Object.assign({}, state, {cafe: action.cafe})
    default:
      return state
  }
}

export default cafesReducer

//show_cafe, edit/update_cafe, delete_cafe
