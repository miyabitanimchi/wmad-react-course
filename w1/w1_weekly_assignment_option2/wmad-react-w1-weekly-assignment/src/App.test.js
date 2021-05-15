import { render, screen } from "@testing-library/react";
import ToggleText from "./ToggleText";

test("renders learn react link", () => {
  render(<ToggleText />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
