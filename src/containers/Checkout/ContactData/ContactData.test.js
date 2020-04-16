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

let wrapper;
let ContactDataInstance;
let orderHandler = jest.fn();
let inputChangedHandler = jest.fn();
let event;
let orderForm = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Street",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "ZIP Code",
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      isNumeric: true,
    },
    valid: false,
    touched: false,
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Country",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your E-Mail",
    },
    value: "",
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
  },
  deliveryMethod: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "fastest", displayValue: "Fastest" },
        { value: "cheapest", displayValue: "Cheapest" },
      ],
    },
    value: "fastest",
    validation: {},
    valid: true,
  },
  formIsValid: false,
};

beforeEach(() => {
  wrapper = shallow(
    <ContactData
      orderHandler={orderHandler}
      onOrderBurger={() => {}}
      inputChangedHandler={inputChangedHandler}
    />
  );
  ContactDataInstance = wrapper.instance();
});
describe("<ContactData />", () => {
  it("should test orderHandler function", () => {
    let output = 1;
    const spy = jest.spyOn(ContactDataInstance, "orderHandler");
    ContactDataInstance.forceUpdate();
    ContactDataInstance.orderHandler(event);
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("should test inputChangedHandler function", () => {
    let output = 1;
    const spy = jest.spyOn(ContactDataInstance, "inputChangedHandler");
    ContactDataInstance.forceUpdate();
    ContactDataInstance.inputChangedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
  });
  it("checks if setState is called when inputChangedHandler is invoked", () => {
    let output = 1;
    const spy = jest.spyOn(ContactDataInstance, "setState");
    ContactDataInstance.inputChangedHandler();
    expect(spy).toHaveBeenCalledTimes(output);
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
