import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Layout } from "./Layout";
import Aux from "../Aux/Aux";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

configure({ adapter: new Adapter() });
let wrapper;
let layoutInstance;
let sideDrawerClosedHandler = jest.fn();
let sideDrawerToggleHandler = jest.fn();
beforeEach(() => {
  wrapper = shallow(
    <Layout
      sideDrawerClosedHandler={sideDrawerClosedHandler}
      sideDrawerToggleHandler={sideDrawerToggleHandler}
    />
  );
  layoutInstance = wrapper.instance();
});

describe("<Layout />", () => {
  it("test for sideDrawerClosedHandler", () => {
    let output = 1;
    const spy = jest.spyOn(layoutInstance, "sideDrawerClosedHandler");
    layoutInstance.forceUpdate();
    layoutInstance.sideDrawerClosedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("test for sideDrawerToggleHandler", () => {
    let output = 1;
    const spy = jest.spyOn(layoutInstance, "sideDrawerToggleHandler");
    layoutInstance.forceUpdate();
    layoutInstance.sideDrawerToggleHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when sideDrawerClosedHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(layoutInstance, "setState");
    layoutInstance.sideDrawerClosedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when sideDrawerToggleHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(layoutInstance, "setState");
    layoutInstance.sideDrawerToggleHandler();
    expect(spy).toHaveBeenCalledTimes(output);
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
