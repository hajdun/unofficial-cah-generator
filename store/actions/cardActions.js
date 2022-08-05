import { GET_CARDS } from '../types'

export const getCards = (cards) => dispatch => {
  dispatch({
    type: GET_CARDS,
    payload: cards
  })
}
