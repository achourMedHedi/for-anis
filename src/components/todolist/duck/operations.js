import { sampleAction } from './actions'

const sampleOperation = () => (dispatch) => {
  dispatch(sampleAction())
}

export { sampleOperation }
