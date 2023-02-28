import { fireEvent } from "@testing-library/react";

export function click(loginButton: HTMLElement) {
    fireEvent.click(loginButton);
}

export function change(textBox: HTMLElement, value: string) {
    fireEvent.change(textBox, { target: { value } });
}
