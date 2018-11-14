import {createStore} from 'redux';

const initialState = {
  count: 0
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state;
  }
}

export default createStore(articleReducer);