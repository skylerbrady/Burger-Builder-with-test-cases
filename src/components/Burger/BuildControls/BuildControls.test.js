import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

configure({ adapter: new Adapter() });
let wrapper;
describe("<BuildControls />", () => {
  beforeEach(
    () =>
      (wrapper = shallow(
        <BuildControls
          price={0}
          ordered={() => {}}
          ingredientAdded={() => {}}
          ingredientRemoved={() => {}}
          isAuth={false}
        />
      ))
  );

  it("Should have ORDER NOW button if the user is authenticated", () => {
    wrapper.setProps({ isAuth: true });
    let output = "ORDER NOW";
    expect(wrapper.find("button").text()).toEqual(output);
  });

  it("should render current price as 10", () => {
    wrapper = shallow(<BuildControls price={10} />);
    let output = "Current Price: 10";
    expect(wrapper.find(".currentprice").text()).toEqual(output);
  });
  it("Should have SIGN UP buttonmif user is not authenticated", () => {
    wrapper.setProps({ isAuth: false });
    let output = "SIGN UP TO ORDER";
    expect(wrapper.find("button").text()).toEqual(output);
  });
});
