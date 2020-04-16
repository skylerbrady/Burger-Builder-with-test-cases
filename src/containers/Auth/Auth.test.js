import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Redirect } from "react-router-dom";
import { Auth } from "./Auth";
import Spinner from "../../components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });
let wrapper;
let authInstance;
let inputChangedHandler = jest.fn();
let submitHandler = jest.fn();
let switchAuthModeHandler = jest.fn();
beforeEach(() => {
  wrapper = shallow(
    <Auth
      onAuth={() => {}}
      onSetAuthRedirectPath={() => {}}
      inputChangedHandler={inputChangedHandler}
      submitHandler={submitHandler}
      switchAuthModeHandler={switchAuthModeHandler}
    />
  );
  authInstance = wrapper.instance();
});

describe("<Auth />", () => {
  it("should test the inputChangedHandler", () => {
    let output = 1;
    const spy = jest.spyOn(authInstance, "inputChangedHandler");
    authInstance.forceUpdate();
    authInstance.inputChangedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should test the submitHandler", () => {
    let output = 1;
    const spy = jest.spyOn(authInstance, "submitHandler");
    authInstance.forceUpdate();
    authInstance.submitHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should test the switchAuthModeHandler", () => {
    let output = 1;
    const spy = jest.spyOn(authInstance, "switchAuthModeHandler");
    authInstance.forceUpdate();
    authInstance.switchAuthModeHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when switchAuthModeHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(authInstance, "setState");
    authInstance.switchAuthModeHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should display a spinner if loading", () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should not display a spinner if not loading", () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });

  it("should display an error if thrown", () => {
    wrapper.setProps({ error: { message: "Something went wrong" } });
    expect(wrapper.find("p").text()).toEqual(`Something went wrong`);
  });

  it("should not display an error if not thrown", () => {
    wrapper.setProps({ error: null });
    expect(wrapper.contains(<p />)).toEqual(false);
  });

  it("should redirect if user is authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

  it("should not redirect if user is not authenticated", () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });
});
