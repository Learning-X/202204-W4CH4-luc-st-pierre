import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Info from "./Info";

describe("Given an Info Component", () => {
  describe("When it's being rendered", () => {
    test("Then it should render a span element with text 'Calling...", () => {
      const text = "Calling...";

      render(
        <PhoneContextProvider>
          <Info />
        </PhoneContextProvider>
      );

      const expectedText = screen.getByText(text);
      expect(expectedText).toBeInTheDocument();
    });
  });
});
