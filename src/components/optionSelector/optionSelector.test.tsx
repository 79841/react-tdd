import { render, screen } from "@testing-library/react";
import { OptionSelector } from "./optionSelector";
import { userEvent } from "@testing-library/user-event";

describe("Option selector", () => {
  test("renders correctly", () => {
    render(<OptionSelector />);
    const selectorElement = screen.getByRole("listbox");
    expect(selectorElement).toBeInTheDocument();
  });

  test("select options", async () => {
    const user = userEvent.setup();
    render(<OptionSelector />);
    const selectorElement = screen.getByRole("listbox");
    await user.selectOptions(selectorElement, ["1", "B"]);
    const optionA: HTMLOptionElement = screen.getByRole("option", {
      name: "A",
    });
    const optionB: HTMLOptionElement = screen.getByRole("option", {
      name: "B",
    });
    const optionC: HTMLOptionElement = screen.getByRole("option", {
      name: "C",
    });
    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(true);
    expect(optionC.selected).toBe(false);
  });

  test("deselect options", async () => {
    const user = userEvent.setup();
    render(<OptionSelector />);
    const selectElement = screen.getByRole("listbox");
    await user.deselectOptions(selectElement, ["1", "B"]);
    const optionA: HTMLOptionElement = screen.getByRole("option", {
      name: "A",
    });
    const optionB: HTMLOptionElement = screen.getByRole("option", {
      name: "B",
    });
    const optionC: HTMLOptionElement = screen.getByRole("option", {
      name: "C",
    });
    expect(optionA.selected).toBe(false);
    expect(optionB.selected).toBe(false);
    expect(optionC.selected).toBe(false);
  });
});
