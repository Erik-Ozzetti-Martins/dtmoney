import React from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { Input } from "../Form/Input";
import { RegisterViewModal } from "./RegisterViewModal";

//ref={animeForm}

const RegisterBase: ForwardRefRenderFunction<HTMLFormElement> = () => {
  const { register, error, errors, handleSubmit, handleCreatedIn } =
    RegisterViewModal();

  return (
    <form onSubmit={handleSubmit(handleCreatedIn)}>
      <h2>Criar Conta</h2>
      <Input
        type="text"
        Label="nome"
        placeholder="nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        Label="Email"
        placeholder="email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        Label="Password"
        placeholder="senha"
        error={errors.password}
        {...register("password")}
      />
      <button type="submit">Criar conta</button>
      <p>{error}</p>
    </form>
  );
};
export const Register = forwardRef(RegisterBase);
