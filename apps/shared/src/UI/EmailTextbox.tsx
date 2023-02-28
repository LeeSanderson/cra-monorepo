import React, { ChangeEvent, ForwardedRef, ReactElement } from "react";
import Input from "@brighthr/component-input";

export type EmailTextboxProps = {
  name: string;
  placeholder: string;
  initialValue?: string;
  onChange: (value: string) => void;
  hasError?: boolean;
};

export const EmailTextbox = React.forwardRef(
  (
    { name, placeholder, initialValue, onChange, hasError }: EmailTextboxProps,
    _ref?: ForwardedRef<EmailTextboxProps>
  ): ReactElement => {
    const props = {
      "aria-label": name,
      id: name,
      name: name,
      type: "email",
      placeholder: placeholder,
      "aria-placeholder": placeholder,
      value: initialValue,
      hasError: hasError || false,
    };

    function emailChanged({
      target: { value },
    }: ChangeEvent<HTMLInputElement>) {
      if (onChange !== undefined) {
        onChange(value);
      }
    }
    return <Input {...props} onChange={emailChanged} />;
  }
);
