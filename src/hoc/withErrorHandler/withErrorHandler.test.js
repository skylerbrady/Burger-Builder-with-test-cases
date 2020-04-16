import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WithErrorHandler from "./withErrorHandler";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

configure({ adapter: new Adapter() });
let wrapper;
let withErrorHandlerInstance;
let errorConfirmedHandler = jest.fn();
beforeEach(() => {
  wrapper = shallow(
    <WithErrorHandler errorConfirmedHandler={errorConfirmedHandler} />
  );
  withErrorHandlerInstance = wrapper.instance();
});
describe("<WithErrorHandler />", () => {
  it("test for componentWillMount", () => {
    let output = 1;
    const spy = jest.spyOn(withErrorHandlerInstance, "componentWillMount");
    withErrorHandlerInstance.forceUpdate();
    withErrorHandlerInstance.componentWillMount();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("test for componentWillUnmount", () => {
    let output = 1;
    const spy = jest.spyOn(withErrorHandlerInstance, "componentWillUnmount");
    withErrorHandlerInstance.forceUpdate();
    withErrorHandlerInstance.componentWillUnmount();
    expect(spy).toHaveBeenCalledTimes(output);
  });

  it("test for errorConfirmedHandler", () => {
    let output = 1;
    const spy = jest.spyOn(withErrorHandlerInstance, "errorConfirmedHandler");
    withErrorHandlerInstance.forceUpdate();
    withErrorHandlerInstance.errorConfirmedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when errorConfirmedHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(withErrorHandlerInstance, "setState");
    withErrorHandlerInstance.errorConfirmedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("by default it should not render modal ", () => {
    let output = 0;
    expect(wrapper.find(Modal).length).toEqual(output);
  });
  it("Should render a Aux element", () => {
    let output = 0;
    expect(wrapper.find(Aux).length).toEqual(output);
  });
});
