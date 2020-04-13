import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItem />", () => {
  let wrapper;
  wrapper = shallow(<NavigationItem />);
  it("should render one list item", () => {
    expect(wrapper.find("li")).toHaveLength(1);
  });
  it("should render one NavLink element ", () => {
    wrapper = shallow(
      <NavLink link="/" exact={true} children="Burger Builder" />
    );
    expect(wrapper.find(NavLink)).toHaveLength(0);
  });
});
