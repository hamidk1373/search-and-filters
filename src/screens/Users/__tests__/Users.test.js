import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Users from "../index";

test("Users renders correctly", () => {
  const root = create(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );

  expect(root.toJSON()).toMatchSnapshot();
});

test("Users renders correctly", () => {
  const { container, getByText } = render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );

  container.querySelector('[data-testid="userslist"]');

  expect(container).toBeInTheDocument();

  console.log("container.children", container.children[0]);

  expect(container.children.length).toBe(30);
});
