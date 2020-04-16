import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "./Logo";
import BurgerLogo from "../../assets/images/burger-logo.png";

configure({ adapter: new Adapter() });
describe("<Logo />", () => {
  beforeEach(() => (wrapper = shallow(<Logo style={{ height: {} }} />)));
  let wrapper;
  it("should render one div", () => {
    wrapper = shallow(<Logo />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("should render one image logo", () => {
    wrapper = shallow(<Logo />);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
