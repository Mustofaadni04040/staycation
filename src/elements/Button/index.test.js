import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  setTimeout(() => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
  }, 1000);
});

test("Should render <Link> component", () => {
  setTimeout(() => {
    const { container } = render(
      <Router>
        <Button href="" type="link"></Button>
      </Router>
    );
    expect(container.querySelector("a")).toBeInTheDocument();
  }, 1000);
});
