import React from "react"
import Enzyme from "enzyme"
import { shallow, mount, render } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from "../src/App"
import comp from "./components/counter"
import store from "./modules/counter"

Enzyme.configure({ adapter: new Adapter() })

describe("Test", () => {
  it("should return the initial state", () => {
    expect(store(undefined, {})).toEqual({ count: 0, state: 0 })
  })
})
