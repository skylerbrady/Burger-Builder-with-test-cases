import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CheckoutSummary from "./CheckoutSummary";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

configure({ adapter: new Adapter() });
let wrapper;

describe("<CheckoutSummary />", () => {
  wrapper = shallow(<CheckoutSummary />);
  it("should render some greeting text", () => {
    let output = "We hope it tastes well!";
    expect(wrapper.find("h1").text()).toEqual(output);
  });
  it("should display burger ingredients", () => {
    let myigredients = { salad: 1, bacon: 0, cheese: 0, meat: 0 };
    wrapper = shallow(<Burger ingredients={myigredients} />);
    let output = myigredients;
    expect(wrapper.find(<Burger ingredients={myigredients} />)).toMatch(output);
  });
});
