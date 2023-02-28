import { screen, render, fireEvent } from "@testing-library/react";
import { PasswordTextbox } from "./PasswordTextbox";

describe("PasswordTextbox should", () => {
  let passwordInput: HTMLElement;
  let passwordInputButton: HTMLElement;
  let updatedPassword: string;

  function passwordChanged(value: string) {
    updatedPassword = value;
  }

  beforeEach(() => {
    render(<PasswordTextbox name="password" placeholder="Password" onChange={passwordChanged} />);
    passwordInput = screen.getByRole("textbox", { name: "password" });
    passwordInputButton = screen.getByRole("button");
  });

  it("render an email input textbox", () => {
    expect(passwordInput).not.toBeNull();
  });

  it("have an id", () => {
    expect(passwordInput.id).toEqual("password");
  });

  it("have a name attribute", () => {
    expect(passwordInput).toHaveAttribute("name", "password");
  });

  it("have a type of password", () => {
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("has a placeholder", () => {
    expect(passwordInput).toHaveAttribute("placeholder", "Password");
  });

  it("has an aria-placeholder", () => {
    expect(passwordInput).toHaveAttribute("aria-placeholder", "Password");
  });

  it("show a show password button", () => {
    expect(passwordInputButton).toHaveAttribute("aria-label", "Show password");
  });

  it("toggle password visibility when button clicked", () => {
    fireEvent.click(passwordInputButton);
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  it("emits an event when email is changed", () => {
    fireEvent.change(passwordInput, {target: {value:"password"}});
    expect(updatedPassword).toEqual("password");
  });
});
