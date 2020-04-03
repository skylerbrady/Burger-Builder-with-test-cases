import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Burger from "./Burger";

configure({ adapter: new Adapter() });
let wrapper;
let mockTransformedIngredients = jest.fn();
let sometext = "Please start adding ingredients!";
describe("<Burger />", () => {
  beforeEach(() => {
    wrapper = shallow(<Burger />);
  });
  it("should render initially sometext", () => {
    expect(wrapper.find(Burger)).toHaveLength(0);
  });
  let output = 2;
  it("should render initially two burger ingredients ", () => {
    expect(wrapper.find("div").lenght).toEqual(output);
  });
});
