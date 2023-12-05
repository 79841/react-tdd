import { render, screen } from "@testing-library/react";
import { Textarea } from "./textarea";
import userEvent from "@testing-library/user-event";

describe.only("Textarea", () => {
  test("renders correctly", () => {
    render(<Textarea />);
    const textElement = screen.getByRole("textbox");
    expect(textElement).toBeInTheDocument();
  });

  test("clear textbox", async () => {
    const user = userEvent.setup();
    render(<Textarea />);
    const textElement = screen.getByRole("textbox");
    await user.clear(textElement);
    expect(textElement).toHaveValue("");
  });
});
