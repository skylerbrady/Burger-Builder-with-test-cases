import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

configure({ adapter: new Adapter() });
let wrapper;
describe("<BuildControls />", () => {
  wrapper = shallow(<BuildControls price={"10"} />);
  it("should render current price as 10", () => {
    let output = "Current Price: 10";
    expect(wrapper.find(".currentprice").text()).toEqual(output);
  });
});
