import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When instantiated", () => {
    test("Then it should render with text '329019288'", () => {
      const numbers = "329019288";
      const expectedNumbers = { phoneNumber: numbers };

      render(
        <PhoneContext.Provider value={expectedNumbers}>
          <Display />
        </PhoneContext.Provider>
      );

      const displayResult = screen.getByText(numbers);
      expect(displayResult).toBeInTheDocument();
    });
  });
});
