import React from "react";
import Order from "./Order";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Order />", () => {
  let wrapper;
  wrapper = shallow(<Order price={40} />);
  it("should show price as 40", () => {
    let output = "Price: 40";
    expect(wrapper.find(".test").text()).toEqual(output);
  });
  it("should show price as 0 when price is null", () => {
    wrapper = shallow(<Order price={null} />);
    let output = "Price: NaN";
    expect(wrapper.find(".test").text()).toEqual(output);
  });
  it("should show price as 0 when price is not valid number", () => {
    wrapper = shallow(<Order price={""} />);
    let output = "Price: NaN";
    expect(wrapper.find(".test").text()).toEqual(output);
  });
  it("should show Ingredients empty when iningredientOutput is empty object", () => {
    wrapper = shallow(<Order ingredientOutput={[{}, {}, {}, {}]} />);
    let output = "Ingredients: ";
    expect(wrapper.find(".ingTest").text()).toEqual(output);
  });
});
