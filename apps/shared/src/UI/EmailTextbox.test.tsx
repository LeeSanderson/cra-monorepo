import { screen, render, fireEvent } from "@testing-library/react";
import { EmailTextbox } from "./EmailTextbox";

describe("EmailTextbox should", () => {
  let element: HTMLElement;
  let updatedEmailAddress: string;

  function emailChanged(value: string) {
    updatedEmailAddress = value;
  }

  function hasTag(tag: string) {
    const state = expect.getState();
    return state.currentTestName.includes(`@${tag}`);
  }

  beforeEach(() => {
    if (hasTag("initial")) {
      render(<EmailTextbox name="email" placeholder="Email" initialValue="me@somewhere.com" onChange={emailChanged} />);
    } else {
      render(<EmailTextbox name="email" placeholder="Email" onChange={emailChanged} />);
    }

    element = screen.getByRole("textbox", { name: "email" });
  });

  it("render an email input textbox", () => {
    expect(element).not.toBeNull();
  });

  it("have an id", () => {
    expect(element.id).toEqual("email");
  });

  it("have a name attribute", () => {
    expect(element).toHaveAttribute("name", "email");
  });

  it("have a type of email", () => {
    expect(element).toHaveAttribute("type", "email");
  });

  it("has a placeholder", () => {
    expect(element).toHaveAttribute("placeholder", "Email");
  });

  it("has an aria-placeholder", () => {
    expect(element).toHaveAttribute("aria-placeholder", "Email");
  });

  it("shows the supplied @initial value", () => {
    expect(element).toHaveValue("me@somewhere.com");
  });

  it("emits an event when email is changed", () => {
    fireEvent.change(element, {target: {value:"nobody@nowhere.com"}});
    expect(updatedEmailAddress).toEqual("nobody@nowhere.com");
  });
});
