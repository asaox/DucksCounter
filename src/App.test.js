import React from "react"
import Enzyme from "enzyme"
import { shallow, mount, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import store, * as actions from "./modules/counter"
import App from "./App"

// test

Enzyme.configure({ adapter: new Adapter() })

describe("Counter", () => {
  it("should return the initial state", () => {
    expect(store(undefined, {})).toEqual({ count: 0 })
  })
  
  it("should save state from setState", () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ count: 2 })
    expect(wrapper.state().count).toBe(2)
  })

  it("should create an action to increment", () => {
    const type = "COUNTER_INCREMENT"
    const expectedAction = { type, "payload": {amount: 1}, }
    expect(actions.increment(type)).toEqual(expectedAction)
  })

  it("should create an action to decrement", () => {
    const type = "COUNTER_DECREMENT"
    const expectedAction = { type, "payload": {amount: -1}, }
    expect(actions.decrement(type)).toEqual(expectedAction)
  })

  it("should handle INCREMENT", () => {
    expect(store({ count: 1 }, { type: "COUNTER_INCREMENT", payload: {amount: 1} })).toEqual({
      count: 2
    })
  })

  it("should handle DECREMENT", () => {
    expect(store({ count: 3 }, { type: "COUNTER_DECREMENT", payload: {amount: -1} })).toEqual({
      count: 2
    })
  })
})
