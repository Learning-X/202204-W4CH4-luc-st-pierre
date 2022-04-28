import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When instantiated", () => {
    test("Then it should render an anchor element", () => {
      render(<Action action={"call"} />);
      const element = screen.getByRole("link");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When being rendered with actionOnClick 'hang'", () => {
    test("Then it should render a link", () => {
      const action = "hang";
      const expectedAction = "Hang";

      render(<Action action={action} />);

      const actionResult = screen.getByRole("link");
      expect(actionResult.textContent).toBe(expectedAction);
    });
  });
});
