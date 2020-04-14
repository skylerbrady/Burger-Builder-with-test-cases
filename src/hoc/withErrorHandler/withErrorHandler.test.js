import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WithErrorHandler from "./withErrorHandler";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

configure({ adapter: new Adapter() });
describe("<WithErrorHandler />", () => {
  let wrapper;
  it("by default it should not render modal ", () => {
    wrapper = shallow(<WithErrorHandler />);
    let output = 0;
    expect(wrapper.find(Modal).length).toEqual(output);
  });
  it("Should render a Aux element", () => {
    let output = 0;
    expect(wrapper.find(Aux).length).toEqual(output);
  });
});
