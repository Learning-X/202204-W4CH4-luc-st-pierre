import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("when being clicked", () => {
    test("Then it should call an action", () => {
      const action = jest.fn();

      render(<Action action={"call"} actionOnClick={action} />);

      userEvent.click(screen.getByRole("link"));
      expect(action).toHaveBeenCalledTimes(1);
    });
  });
});
