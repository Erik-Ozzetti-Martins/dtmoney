import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./sendForgotPassword";
import { Input } from "../../../Shared/components/Form/Input";
import { SendForgotPasswordEmailViewModel } from "./SendForgotPasswordEmailViewModel";
import money from "../../../../assets/money.gif";

export const SendForgotPasswordEmailView = () => {
  const { register, errors, handleSignIn, handleSubmit } =
    SendForgotPasswordEmailViewModel();
  return (
    <Container>
      <div>
        <img src={money} alt="" />
      </div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h2>Recuperação de senha</h2>
        <Input
          type="email"
          Label="email"
          placeholder="email"
          {...register("email")}
          error={errors.email}
        />
        <button>Enviar</button>
        <Link to="/">voltar</Link>
      </form>
    </Container>
  );
};
