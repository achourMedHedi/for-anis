import types from './types'

const setSpinAnimationState = () => ({
  type: types.TOGGLE_SPIN_ANIMATION,
})

const addItemAction = value => ({
  type: types.ADD_ITEM,
  payload: value,
})

const deleteAction = value => ({
  type: types.DELETE_ITEM,
  payload: value,
})

export { setSpinAnimationState, addItemAction, deleteAction }
