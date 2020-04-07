import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;

  wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);

  it("should render <BuildControls /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });

  it("should render <OrderSummary /", () => {
    expect(wrapper.find(OrderSummary)).toHaveLength(1);
  });
  it("should render <Modal /", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
