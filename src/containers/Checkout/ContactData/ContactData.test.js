import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ContactData } from "./ContactData";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

configure({ adapter: new Adapter() });
describe("<ContactData />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactData />);
  });
  it("should render 6 <Input /> elements ", () => {
    let output = 6;
    expect(wrapper.find(Input).length).toEqual(output);
  });
  it("should render a button by default", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it("should render a button text as ORDER", () => {
    let output = "ORDER";
    expect(wrapper.find("span").text()).toEqual(output);
  });
  it("should render a spinner if loading is true", () => {
    wrapper = shallow(<ContactData loading={true} />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  it("should not render a spinner if loading is false", () => {
    wrapper = shallow(<ContactData loading={false} />);
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });
});
