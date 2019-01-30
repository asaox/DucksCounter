import { handleActions, createAction, combineActions } from "redux-actions"

// state
// ステートの初期値
const initialState = {
  count: 0
}

// action type
// コンポーネントに対するアクションの定義
const INCREMENT = "COUNTER_INCREMENT"
const DECREMENT = "COUNTER_DECREMENT"

// action creator (use createAction)
export const increment = createAction(INCREMENT, amount => ({ amount: 1 }))
export const decrement = createAction(DECREMENT, amount => ({ amount: -1 }))

// reducer (use handleActions)
// リデューサーの定義、アクションごとに状態をどう変更するかの定義
export default handleActions(
  {
    [combineActions(INCREMENT, DECREMENT)]: (state, action) => ({
      ...state,
      count: state.count + action.payload.amount
    })
  },
  initialState
)

/*
// action creator
export function increment() {
  return { type: INCREMENT }
}
export function decrement() {
  return { type: DECREMENT }
}

// action creator (use createActions)
export const { increment, decrement } = createActions({
  INCREMENT: () => ({}),
  DECREMENT: () => ({}),
})

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
