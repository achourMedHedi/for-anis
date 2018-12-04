/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from 'redux'
import { createStore } from 'redux-dynamic-reducer'
import logger from 'redux-logger'

import thunk from 'redux-thunk'
import reducers from './reducers'


const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)

  const composeEnhancers = (process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
  return createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))
}

export default configureStore
