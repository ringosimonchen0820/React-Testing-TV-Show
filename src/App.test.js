import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

describe("App", () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it("app component displays", async () => {
    const text = await wrapper.findByText("Select a season");
    expect(text).toBeInTheDocument();
  });
});