import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderSummary from "./OrderSummary";
import Button from "../../UI/Button/Button";

configure({ adapter: new Adapter() });
let wrapper;
let mockButtonSimulation = jest.fn();
let headingText = "Your Order";
let subHeadingText = "A delicious burger with the following ingredients:";
let mockIngredientSummary = [{}, {}, {}, {}];
describe("<OrderSummary />", () => {
  beforeEach(
    () =>
      (wrapper = shallow(
        <OrderSummary
          price={0}
          ingredients={{ salad: 0, bacon: 0, cheese: 0, meat: 0 }}
          clicked={mockButtonSimulation}
        />
      ))
  );
  it("testing button onclick simulation", () => {
    wrapper.find(Button);
    let simulated_output = 0;
    expect(mockButtonSimulation.mock.calls.length).toEqual(simulated_output);
  });
  it("Should redner Heading Text initially", () => {
    expect(wrapper.find("h3").text()).toEqual(headingText);
  });
  it("Should redner subHeading Text initially", () => {
    expect(wrapper.find(".subheading").text()).toEqual(subHeadingText);
  });
  it("should display ingredient summary", () => {
    wrapper = shallow(<OrderSummary ingredientSummary={[{}, {}, {}, {}]} />);
    expect(wrapper.find(".ulsummary")).toHaveLength(4);
  });
});
