import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Actions from "./Actions";

describe("Given an Action component", () => {
  describe("when instantiated", () => {
    test("Then it should render an Action with a class 'call'", () => {
      render(
        <PhoneContextProvider>
          <Actions />
        </PhoneContextProvider>
      );
      const result = screen.getByRole("link", { class: "Call" });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When instantiated while calling value of true", () => {
    test("Then it should render with display and an action button hang", () => {
      const calling = true;
      const phoneNumber = "123456789";

      render(
        <PhoneContext.Provider value={{ calling, phoneNumber }}>
          <Actions />
        </PhoneContext.Provider>
      );

      const expectButton = screen.getByRole("link");
      expect(expectButton).toBeInTheDocument(".hang");
    });
  });
});
