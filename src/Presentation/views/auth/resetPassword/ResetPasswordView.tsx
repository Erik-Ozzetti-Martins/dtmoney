import React from "react";
import { Input } from "../../../Shared/components/Form/Input";
import { Container } from "./resetPassword";
import money from "../../../../assets/money.gif";
import { ResetPasswordViewModel } from "./ResetPasswordViewModel";

export const ResetPasswordView = () => {
  const { register, errors, handleSignIn, handleSubmit } =
    ResetPasswordViewModel();
  return (
    <Container>
      <div>
        <img src={money} alt="" />
      </div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h2>Nova senha</h2>
        <Input
          type="password"
          Label="password"
          placeholder="senha"
          error={errors.password}
          {...register("password")}
        />
        <button>Enviar</button>
      </form>
    </Container>
  );
};
