import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Layout } from "./Layout";
import Aux from "../Aux/Aux";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  let wrapper = shallow(<Layout />);
  it("state should have false bu default", () => {
    expect(wrapper.state.showSideDrawer).toEqual(false);
    wrapper.sideDrawerToggleHandler();
    let output = true;
    expect(wrapper.state.showSideDrawer).toEqual(output);
  });
  it("toolbar should be render if its authenticated", () => {
    wrapper = shallow(
      <ToolBar isAuthenticated={false} sideDrawerToggleHandler={false} />
    );
    let output = 0;
    expect(wrapper.find(ToolBar).length).toEqual(output);
  });
  it("SideDrawe should open when its state is true", () => {
    wrapper = shallow(
      <SideDrawer isAuthenticated={false} showSideDrawer={true} />
    );
    let output = 0;
    expect(wrapper.find(SideDrawer).length).toEqual(output);
  });
  it("should render a aux element", () => {
    let wrapper = shallow(<Layout />);
    expect(wrapper.find(Aux)).toHaveLength(1);
  });
});
