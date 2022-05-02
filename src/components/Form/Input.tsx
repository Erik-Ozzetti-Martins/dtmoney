import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { InputBa, LabelBase, ErrorBase } from "./input";

interface InputProps {
  name: string;
  Label?: string;
  error?: FieldError;
  type: string;
  placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, placeholder, name, error = null, Label, ...rest },
  ref
) => {
  return (
    <>
      {!!Label && <LabelBase htmlFor={name}>{Label}</LabelBase>}
      <InputBa
        name={name}
        id={name}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <ErrorBase>{error.message}</ErrorBase>}
    </>
  );
};

export const Input = forwardRef(InputBase);
