import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from "./Toolbar";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
configure({ adapter: new Adapter() });
let wraper;
describe("<Toolbar/>", () => {
  wraper = shallow(<Toolbar />);
  it("should render a one <DrawerToggle />", () => {
    expect(wraper.find(DrawerToggle)).toHaveLength(1);
  });
  it("should render <Logo />", () => {
    expect(wraper.find(Logo)).toHaveLength(1);
  });
  it("should render <NavigationItems />", () => {
    expect(wraper.find(NavigationItems)).toHaveLength(1);
  });
});
