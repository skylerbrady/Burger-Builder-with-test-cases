import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Aux from "./Aux";

configure({ adapter: new Adapter() });
describe("<Aux />", () => {
  let wrapper;
  wrapper = shallow(<Aux children={"any data"} />);
  let output = "any data";
  it("should render its children", () => {
    expect(wrapper.find("aux")).toEqual(output);
  });
  it("should render", () => {
    output = 0;
    expect(wrapper.find("aux").length).toEqual(0);
  });
});
