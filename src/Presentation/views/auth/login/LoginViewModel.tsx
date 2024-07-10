import { useState } from "react";
import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextUser } from "../../../../Domain/auth/useContext";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export const LoginViewModel = () => {
  const [login, setLogin] = useState("login");
  const { userLogin, error } = useContextUser();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;
  const handleLogin = (login: string) => {
    setLogin(login);
  };

  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    userLogin({ email: values?.email, password: values?.password });
  };

  return {
    login,
    setLogin,
    userLogin,
    error,
    register,
    handleSubmit,
    errors,
    handleLogin,
    handleSignIn,
  };
};
