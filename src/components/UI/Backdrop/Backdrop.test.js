import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Backdrop from "./Backdrop";

configure({ adapter: new Adapter() });
let wraper;
describe("<Backdrop />", () => {
  wraper = shallow(<Backdrop />);
  let output = 1;
  it("should render backdrop", () => {
    expect(wraper.find("div").lenght).toEqual(output);
  });
});
