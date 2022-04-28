import { render, screen } from "@testing-library/react";
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
});
