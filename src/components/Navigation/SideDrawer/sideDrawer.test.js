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
  beforeEach(() => {
    wraper = shallow(<SideDrawer />);
  });
  wraper = shallow(<SideDrawer />);
  it("should render a one <Backdrop />", () => {
    expect(wraper.find(BackDrop)).toHaveLength(1);
  });
  it("should not render <Backdrop /> if show is false", () => {
    wraper = shallow(<BackDrop open={false} clicked={true} />);
    let output = 0;
    expect(wraper.find(BackDrop)).toHaveLength(0);
  });

  it("should render <Logo />", () => {
    expect(wraper.find(Logo)).toHaveLength(1);
  });
  it("should render <NavigationItems />", () => {
    expect(wraper.find(NavigationItems)).toHaveLength(1);
  });
  it("should not render <NavigationItems /> if its not authenticated", () => {
    wraper = shallow(<NavigationItems isAuth={false} />);
    expect(wraper.find(NavigationItems)).toHaveLength(0);
  });
});
