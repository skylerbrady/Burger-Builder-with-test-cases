import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "./BuildControls";

configure({ adapter: new Adapter() });
let wrapper;
let mockModal = jest.fn();
describe("<BuildControls />", () => {
  beforeEach(() => {
    wrapper = shallow(<BuildControls />);
  });
  it("should render total price", () => {
    let output = 40;
    expect(wrapper.find(".test").props().children[0]).toEqual(output);
  });
});
