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

  describe("When instantiated", () => {
    test("Then it should render an anchor element", () => {
      render(<Action action={"call"} />);
      const element = screen.getByRole("link");
      expect(element).toBeInTheDocument();
    });
  });
});
