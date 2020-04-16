import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "./Input";

configure({ adapter: new Adapter() });
describe("<Input />", () => {
  let wrapper;
  wrapper = shallow(<Input label="place" />);
  it("should render label name as place", () => {
    let output = "place";
    expect(wrapper.find("span").text()).toEqual(output);
  });
});
