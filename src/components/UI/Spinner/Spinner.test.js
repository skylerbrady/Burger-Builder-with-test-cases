import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "./Spinner";

configure({ adapter: new Adapter() });

describe("<Spinner />", () => {
  let wrapper;
  wrapper = shallow(<Spinner />);
  let output = 1;
  it("should render spinner", () => {
    expect(wrapper.find("div").length).toEqual(output);
  });
});
