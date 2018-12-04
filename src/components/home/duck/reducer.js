import types from './types'

const initialState = { shouldSpin: false, list: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SPIN_ANIMATION:
      return {
        ...state,
        shouldSpin: !state.shouldSpin,
      }
    case types.ADD_ITEM:
      return {
        ...state,
        list: state.list.concat(action.payload),
      }
    case types.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(el => el !== action.payload),
      }
    default:
      return state
  }
}
