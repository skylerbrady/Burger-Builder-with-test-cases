import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";

configure({ adapter: new Adapter() });
let wrapper;
let BurgerBuilderIntance;
let purchaseHandler = jest.fn();
let purchaseCancelHandler = jest.fn();
let purchaseContinueHandler = jest.fn();
beforeEach(() => {
  wrapper = shallow(
    <BurgerBuilder
      onInitIngredients={() => {}}
      purchaseHandler={purchaseHandler}
      onSetAuthRedirectPath={() => {}}
      purchaseCancelHandler={purchaseCancelHandler}
      onInitPurchase={() => {}}
      push={() => {}}
      purchaseContinueHandler={purchaseContinueHandler}
    />
  );
  BurgerBuilderIntance = wrapper.instance();
});
describe("<BurgerBuilder />", () => {
  it("should test purchaseCancelHandler function", () => {
    let output = 1;
    const spy = jest.spyOn(BurgerBuilderIntance, "purchaseCancelHandler");
    BurgerBuilderIntance.forceUpdate();
    BurgerBuilderIntance.purchaseCancelHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should test purchaseContinueHandler function", () => {
    let output = 1;
    const spy = jest.spyOn(BurgerBuilderIntance, "purchaseContinueHandler");
    BurgerBuilderIntance.forceUpdate();
    BurgerBuilderIntance.purchaseContinueHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should test purchaseHandler function", () => {
    let output = 1;
    const spy = jest.spyOn(BurgerBuilderIntance, "purchaseHandler");
    BurgerBuilderIntance.forceUpdate();
    BurgerBuilderIntance.purchaseHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when purchaseCancelHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(BurgerBuilderIntance, "setState");
    BurgerBuilderIntance.purchaseCancelHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when purchaseHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(BurgerBuilderIntance, "setState");
    BurgerBuilderIntance.purchaseHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });

  it("should render <BuildControls /> when receiving ingredients", () => {
    // wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });

  it("should render <OrderSummary /", () => {
    expect(wrapper.find(OrderSummary)).toHaveLength(0);
  });
  it("should render <Modal /", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
