import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DrawerToggle from "./DrawerToggle";
import classes from "./DrawerToggle.css";
configure({ adapter: new Adapter() });
let wrapper;
let mockOnclick = jest.fn();
describe("<DrawerToggle/>", () => {
  beforeEach(() => {
    wrapper = shallow(
      <DrawerToggle onClick={mockOnclick} className={classes.DrawerToggle} />
    );
  });
  it("test clicked event ", () => {
    wrapper.find("DrawerToggle").simulate("click");
    expect(mockOnclick.mock.calls.length).toEqual(1);
  });
  it("should render 4 div element", () => {
    expect(wrapper.find("div")).toHaveLength(4);
  });
});
