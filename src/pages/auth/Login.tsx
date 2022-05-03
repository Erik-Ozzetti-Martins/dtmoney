import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { useContextUser } from "../../context/useContext";
import { Container } from "./login";
import money from "../../assets/money.gif";
import { useState, useRef } from "react";


import { Register } from "../../components/register/Register";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export function Login() {
  const [login, setLogin] = useState("login");
  const { userLogin, error } = useContextUser();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const handleLogin = (login: string) => {
    setLogin(login);
  };

  const animeForm: React.MutableRefObject<any> = useRef();

 

  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    userLogin({ email: values?.email, password: values?.password });
  };

  return (
    <Container>
      <div>
        <img src={money} alt="" />
      </div>
      <div>
        {login === "login" ? (
          <form onSubmit={handleSubmit(handleSignIn)} ref={animeForm}>
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
              Label="Password"
              placeholder="senha"
              error={errors.password}
              {...register("password")}
            />
            <Link  style={{marginLeft: '310px'}} to="/sendForgotPassword">Esqueci senha</Link>
              <button type="submit"> Login</button>
            <p>{error}</p>
          </form>
        ) : (
         <Register  ref={animeForm}/>
        )}
        {login === "login" ? (
          <small onClick={() => handleLogin("created")}>criar uma conta </small>
        ) : (
          <small onClick={() => handleLogin("login")}>ja tem uma conta</small>
        )}
      </div>
    </Container>
  );
}
