import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";
configure({ adapter: new Adapter() });
let wraper;
describe("<Button/>", () => {
  wraper = shallow(<Button />);
  let output = 1;
  it("should render a button", () => {
    expect(wraper.find("button").length).toEqual(output);
  });
});
