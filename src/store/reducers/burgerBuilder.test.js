import reducer from "./burgerBuilder";
import actionTypes from "../actions/actionTypes";

describe("burgerBuilder reducer", () => {
  it("should return intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
      totalPrice: 40,
      error: false,
      building: false,
    });
  });
  it("should return INGREDIENT_PRICES", () => {
    expect(reducer(INGREDIENT_PRICES, {})).toEqual({
      salad: 15,
      cheese: 25,
      meat: 30,
      bacon: 23,
    });
  });
});
