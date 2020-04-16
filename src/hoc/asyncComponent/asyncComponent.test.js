import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AsyncComponent from "./asyncComponent";

configure({ adapter: new Adapter() });
let wrapper;
let componentDidMount = jest.fn();
let asyncComponentInstance;

beforeEach(() => {
  wrapper = shallow(
    <AsyncComponent
      importComponent={() => {}}
      componentDidMount={componentDidMount}
    />
  );
  asyncComponentInstance = wrapper.instance();
});
describe("<AsyncComponent>", () => {
  it("should test componentDidMount", () => {
    let output = 1;
    const spy = jest.spyOn(asyncComponentInstance, "componentDidMount");
    asyncComponentInstance.forceUpdate();
    asyncComponentInstance.componentDidMount();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when componentDidMount is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(asyncComponentInstance, "setState");
    asyncComponentInstance.componentDidMount();
    expect(spy).toHaveBeenCalledTimes(output);
  });
});
