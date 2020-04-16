import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Redirect, Route } from "react-router-dom";
import { Checkout } from "./Checkout";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

configure({ adapter: new Adapter() });

describe("<Checkout />", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Checkout match={{ path: "" }} ings={null} purchased={false} />
      ))
  );

  it("should redirect home if null ingredients found", () => {
    wrapper.setProps({ ings: null, purchased: false });
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
  it("Should redirect to home if ingredients found and purchase is true", () => {
    wrapper.setProps({ ings: {}, purchased: true });
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
  it("should not redirect if ingredients found but purchase is false", () => {
    wrapper.setProps({ ings: {}, purchased: false });
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });
  it("Should render CheckoutSummary if ingredients found", () => {
    wrapper.setProps({ ings: {}, purchased: false });
    expect(wrapper.find(CheckoutSummary)).toHaveLength(1);
  });
  it("should render a <Route/> if ingredients found", () => {
    wrapper.setProps({
      ings: {},
      purchased: false,
      match: { path: "/any/path" },
    });
    expect(wrapper.find(Route)).toHaveLength(1);
  });
});
