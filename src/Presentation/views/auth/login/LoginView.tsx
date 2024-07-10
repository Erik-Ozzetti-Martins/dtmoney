import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../../Shared/components/Form/Input";
import { Register } from "../../../Shared/components/register/RegisterView";
import { Container } from "./login";
import money from "../../../../assets/money.gif";
import { LoginViewModel } from "./LoginViewModel";
export const ViewLogin = () => {
  const {
    login,
    error,
    errors,
    handleLogin,
    handleSignIn,
    handleSubmit,
    register,
  } = LoginViewModel();

  return (
    <Container>
      <div>
        <img src={money} alt="" />
      </div>
      <div>
        {login === "login" ? (
          <form onSubmit={handleSubmit(handleSignIn)}>
            <h2>Login</h2>
            <Input
              type="email"
              Label="Email"
              placeholder="email"
              {...register("email")}
              error={errors.email}
            />
            <Input
              type="password"
              Label="Senha"
              placeholder="senha"
              error={errors.password}
              {...register("password")}
            />
            <div className="send-forgot-password">
              <Link to="/sendForgotPassword">Esqueci senha</Link>
            </div>
            <button type="submit"> Login</button>
            <p>{error}</p>
          </form>
        ) : (
          <Register />
        )}
        <div className="small">
          {login === "login" ? (
            <small className="" onClick={() => handleLogin("created")}>
              criar uma conta{" "}
            </small>
          ) : (
            <small className="" onClick={() => handleLogin("login")}>
              ja tem uma conta
            </small>
          )}
        </div>
      </div>
    </Container>
  );
};
