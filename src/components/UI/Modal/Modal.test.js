import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

configure({ adapter: new Adapter() });
let wraper;
let moclClosedModal = jest.fn();
describe("<Modal/>", () => {
  wraper = shallow(<Modal show={true} clicked={false} />);
  let output = 1;
  it("should render the whole modal", () => {
    expect(wraper.find("div").length).toEqual(output);
  });
  it("should not reder the modal when show is false", () => {
    wraper.setProps({ show: false });
    output = 0;
    expect(wraper.find("Backdrop").length).toEqual(output);
  });
  it("testing button onclick simulation", () => {
    wraper.setProps({ clicked: moclClosedModal });
    wraper.find("Backdrop");
    let simulated_output = 0;
    expect(moclClosedModal.mock.calls.length).toEqual(simulated_output);
  });
  it("should closed when clicked is executed", () => {
    wraper.setProps({ clicked: true });
    let output = 0;
    expect(wraper.find("Backdrop").length).toEqual(output);
  });
});
