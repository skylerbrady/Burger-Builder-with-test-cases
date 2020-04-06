import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideDrawer from "./SideDrawer";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
configure({ adapter: new Adapter() });
let wraper;
describe("<SideDrawer/>", () => {
  wraper = shallow(<SideDrawer />);
  it("should render a one <Backdrop />", () => {
    expect(wraper.find(BackDrop)).toHaveLength(1);
  });
  it("should render <Logo />", () => {
    expect(wraper.find(Logo)).toHaveLength(1);
  });
  it("should render <NavigationItems />", () => {
    expect(wraper.find(NavigationItems)).toHaveLength(1);
  });
});
