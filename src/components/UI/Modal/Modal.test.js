import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

configure({ adapter: new Adapter() });
let wraper;
describe("<Modal/>", () => {
  wraper = shallow(<Modal />);
  let output = 1;
  it("should render the whole modal", () => {
    expect(wraper.find("div").length).toEqual(output);
  });
  const comp = shallow(<Modal {...props} />);
  const shouldUpdate = comp
    .instance()
    .shouldComponentUpdate(nextProps, nextState);
  expect(shouldUpdate).toBe(true / false);
});
