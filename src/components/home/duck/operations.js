import { setSpinAnimationState, addItemAction, deleteAction } from './actions'

const toggleSpinAnimation = () => (dispatch) => {
  dispatch(setSpinAnimationState())
}

const addItemOperation = value => (dispatch) => {
  dispatch(addItemAction(value))
}

const deleteItemOperation = value => (dispatch) => {
  dispatch(deleteAction(value))
}

export { toggleSpinAnimation, addItemOperation, deleteItemOperation }
