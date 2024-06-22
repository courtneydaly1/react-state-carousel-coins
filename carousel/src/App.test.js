import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


// smoke tests

it("renders without crashing", function() {
  render(<App />);
});