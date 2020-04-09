import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControl from "./BuildControl";
configure({ adapter: new Adapter() });
describe("<BuildControl />", () => {
  let wrapper;
  let mockadded = jest.fn();
  let mockremoved = jest.fn();
  wrapper = shallow(
    <BuildControl label="" added={mockadded} removed={mockremoved} />
  );
  it("should render two div element", () => {
    let output = 2;
    expect(wrapper.find("div").length).toEqual(output);
  });
  it("it should render a label text as salad", () => {
    wrapper.setProps({ label: "Salad" });
    let output = "Salad";
    expect(wrapper.find("span").text()).toEqual(output);
  });
});
