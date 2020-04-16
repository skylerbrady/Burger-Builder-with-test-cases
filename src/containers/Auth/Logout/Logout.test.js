import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Logout } from "./Logout";
import { Redirect } from "react-router-dom";

configure({ adapter: new Adapter() });
describe("<Logout />", () => {
  let wrapper;
  wrapper = shallow(<Logout onLogout={() => {}} />);
  it("should redirect to home if logout is true", () => {
    wrapper.setProps({ onLogout: true });
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
  it("should not redirect to home if logout is false", () => {
    wrapper.setProps({ onLogout: false });
    expect(wrapper.find(Redirect)).toBeNull;
  });
});
