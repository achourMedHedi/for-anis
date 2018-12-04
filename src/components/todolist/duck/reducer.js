import types from './types';

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAMPLE_TYPE:
      return action.payload
    default:
      return state
  }
}
