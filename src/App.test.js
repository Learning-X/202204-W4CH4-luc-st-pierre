import { render, screen } from "@testing-library/react";
import App from "./App";
import PhoneContextProvider from "./contexts/PhoneContextProvider";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should render a Display with text 'Calling...'", () => {
      const text = "Calling...";

      render(
        <PhoneContextProvider>
          <App />
        </PhoneContextProvider>
      );
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
