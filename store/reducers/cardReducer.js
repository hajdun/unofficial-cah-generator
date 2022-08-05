import { SET_CARDS } from '../types'

const initialState = {
  cards: [],
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false
      }

    default: return state
  }
}
