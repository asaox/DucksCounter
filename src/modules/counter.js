// action type
const INCREMENT = "COUNTER_INCREMENT"
const DECREMENT = "COUNTER_DECREMENT"

// action creator
export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

// reducer
const initialState = {
  state: 0,
  count: 0
}

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
