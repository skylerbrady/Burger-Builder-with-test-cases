import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "./BuildControls";
import BuildControl from "./BuildControl/BuildControl";

configure({ adapter: new Adapter() });
let wrapper;
let type = "salad";
let mockingredientAdded = jest.fn();
let mockingredientRemoved = jest.fn();
describe("<BuildControls />", () => {
  beforeEach(
    () =>
      (wrapper = shallow(
        <BuildControls
          price={0}
          ordered={() => {}}
          ingredientAdded={() => {}}
          ingredientRemoved={() => {}}
          isAuth={false}
        />
      ))
  );

  it("Should have ORDER NOW button if the user is authenticated", () => {
    wrapper.setProps({ isAuth: true });
    let output = "ORDER NOW";
    expect(wrapper.find("button").text()).toEqual(output);
  });

  it("should render current price as 10", () => {
    wrapper = shallow(<BuildControls price={10} />);
    let output = "Current Price: 10";
    expect(wrapper.find(".currentprice").text()).toEqual(output);
  });
  it("Should have SIGN UP button if user is not authenticated", () => {
    wrapper.setProps({ isAuth: false });
    let output = "SIGN UP TO ORDER";
    expect(wrapper.find("button").text()).toEqual(output);
    it("should render ingredient type in added", () => {
      wrapper = shallow(
        <BuildControl
          added={() => {
            ingredientAdded(type);
          }}
        />
      );
      expect(wrapper.find(".More")).toHaveLength(1);
    });
    it("should render ingredient type in added", () => {
      wrapper = shallow(
        <BuildControl
          removed={() => {
            ingredientRemoved(type);
          }}
        />
      );
      expect(wrapper.find(".More")).toHaveLength(1);
    });
  });
  it("add ing mock", () => {
    wrapper = shallow(
      <BuildControl
        label={"Salad"}
        added={() => {
          mockingredientAdded("salad");
        }}
      />
    );
    wrapper.find("BuildControl");
    let simulated_output = 0;
    expect(mockingredientAdded.mock.calls.length).toEqual(simulated_output);
  });
  it("remove ing mock", () => {
    wrapper = shallow(
      <BuildControl
        label={"Salad"}
        added={() => {
          mockingredientRemoved("salad");
        }}
      />
    );
    wrapper.find("BuildControl");
    let simulated_output = 0;
    expect(mockingredientRemoved.mock.calls.length).toEqual(simulated_output);
  });
});
