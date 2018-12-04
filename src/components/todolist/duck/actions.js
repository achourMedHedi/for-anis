import types from './types'

const sampleAction = () => ({
  type: types.SAMPLE_TYPE,
  payload: 'Sample Payload',
})

export { sampleAction }
