import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Burger from "./Burger";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

configure({ adapter: new Adapter() });
let wrapper;
describe("<Burger />", () => {
  wrapper = shallow(<Burger ingredients={""} transformedIngredients={[]} />);
  it("should render sometext when transformedIngredients is 0", () => {
    let output = "Please start adding ingredients!";
    expect(wrapper.find(".testp").text()).toEqual(output);
  });
  it("should render top bread initially ", () => {
    wrapper = shallow(<BurgerIngredient type="bread-top" />);
    let output = 0;
    <BurgerIngredient type="bread-top" className="aa" />;
    expect(wrapper.find(".aa").length).toEqual(output);
  });
  it("should render bottom bread initially ", () => {
    wrapper = shallow(<BurgerIngredient type="bread-bottom" />);
    let output = 0;
    expect(wrapper.find("bread-bottom").length).toEqual(output);
  });
});
