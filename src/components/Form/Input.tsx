import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  name: string;
  Label?: string;
  error?: FieldError;
  type: string;
  placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, placeholder, name, error = null, Label },
  ref
) => {
  return (
    <>
      {!!Label && <label htmlFor={name}>{Label}</label>}
      <input
        name={name}
        id={name}
        ref={ref}
        type={type}
        placeholder={placeholder}
      />
      {!!error && <p>{error.message}</p>}
    </>
  );
};

export const Input = forwardRef(InputBase);
