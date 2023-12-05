import { render, screen } from "@testing-library/react";
import { FileUploader } from "./fileUploader";
import userEvent from "@testing-library/user-event";

describe("File Uploader", () => {
  test("renders correctly", () => {
    render(<FileUploader />);
    const fileInput = screen.getByLabelText(/upload file/i);
    expect(fileInput).toBeInTheDocument();
  });

  test("File upload", async () => {
    const user = userEvent.setup();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    render(<FileUploader />);
    const fileInput: HTMLInputElement = screen.getByLabelText(/upload file/i);
    await user.upload(fileInput, file);
    expect(fileInput.files).not.toBeNull();
    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files?.[0]).toBe(file);
    expect(fileInput.files?.item(0)).toBe(file);
  });
});
