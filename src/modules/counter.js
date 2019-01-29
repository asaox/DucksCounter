import { createActions, handleActions } from "redux-actions"

// state
const initialState = {
  count: 0
}

// action type
const INCREMENT = "COUNTER_INCREMENT"
const DECREMENT = "COUNTER_DECREMENT"

// action creator (use createActions)
export const { increment, decrement } = createActions({
  INCREMENT: () => ({}),
  DECREMENT: () => ({}),
})

// reducer (use handleActions)
export default handleActions({
  [increment]: state => ({
    ...state,
    count: state.count + 1
  }),
  [decrement]: state => ({
    ...state,
    count: state.count - 1    
  })
}, initialState)

/*
// action creator
export function increment() {
  return { type: INCREMENT }
}
export function decrement() {
  return { type: DECREMENT }
}

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
*/
