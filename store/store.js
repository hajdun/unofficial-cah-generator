import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

// file: store.ts
import { configureStore } from '@reduxjs/toolkit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

import reducer from './reducers/'

// initial states here
const initalState = {
  cards: []
}

// creating store
export const store = configureStore({
  reducer,
  preloadedState: initalState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production'
})

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
