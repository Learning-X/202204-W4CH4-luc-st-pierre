import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./key";

describe("Given a Key Component", () => {
  describe("When instantiated with a key '7' as text", () => {
    test("Then it should render a button element with text '7", () => {
      const text = "7";

      render(<Key disabled={true} big={true} text={text} />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });

  describe("When instantiated with a key '4' and an action", () => {
    test("Then it should execute action when clicked", () => {
      const action = jest.fn();

      render(<Key big={true} text={"4"} actionOnClick={action} />);

      const expectedText = screen.getByText("4");
      userEvent.click(expectedText);
      expect(action).toBeCalled();
    });
  });
});
