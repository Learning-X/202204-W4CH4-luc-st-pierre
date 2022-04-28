import Keyboard from "./Keyboard";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import userEvent from "@testing-library/user-event";
const { render, screen } = require("@testing-library/react");

describe("Given a Keyboard component", () => {
  describe("When instantiated with array [1,2,3]", () => {
    test("It should execute action 3 times", () => {
      const keys = [1, 2, 3];
      const action = jest.fn();

      render(
        <PhoneContextProvider>
          <Keyboard keys={keys} actionOnClick={action} />
        </PhoneContextProvider>
      );

      userEvent.click(screen.getByText(keys[0]));
      userEvent.click(screen.getByText(keys[1]));
      userEvent.click(screen.getByText(keys[2]));
    });
  });
});
