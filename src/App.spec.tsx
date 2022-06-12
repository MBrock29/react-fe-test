import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders title and loading indicator", () => {
  render(<App />);

  expect(screen.getByText(/Edozo Weather App/i)).toBeInTheDocument();
  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});
