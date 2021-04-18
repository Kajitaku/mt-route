import React from "react";
import { shallow } from "enzyme";
import Sample from "../Sample";

test("Sample changes the text after click", () => {
  const checkbox = shallow(<Sample labelOn="On" labelOff="Off" />);

  // Interaction demo
  expect(checkbox.text()).toEqual("Off");
  checkbox.find("input").simulate("change");
  expect(checkbox.text()).toEqual("On");

  // Snapshot demo
  expect(checkbox).toMatchSnapshot();
});
