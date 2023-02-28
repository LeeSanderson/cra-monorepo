import Input, { InputProps } from "@brighthr/component-input";
import React, { ChangeEvent, ForwardedRef, useState } from "react";

export type PasswordTextboxProps = {
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
  hasError?: boolean;
};

export const PasswordTextbox = React.forwardRef(
  (
    { name, placeholder, onChange, hasError }: PasswordTextboxProps,
    _ref?: ForwardedRef<PasswordTextboxProps>
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const props: InputProps = {
      "aria-label": name,
      id: name,
      name: name,
      placeholder: placeholder,
      "aria-placeholder": placeholder,
      type: passwordVisible ? "text" : "password",
      role: "textbox",
      buttonAriaLabel: "Show password",
      iconName: passwordVisible ? "visibility" : "visibility-none",
      hasError: hasError,
    };

    function togglePasswordVisibility() {
      setPasswordVisible(!passwordVisible);
      return null;
    }

    function passwordChanged({
      target: { value },
    }: ChangeEvent<HTMLInputElement>) {
      if (onChange !== undefined) {
        onChange(value);
      }
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-redundant-roles
      <>
        <Input
          {...props}
          onClickButton={togglePasswordVisibility}
          onChange={passwordChanged}
        />
      </>
    );
  }
);
