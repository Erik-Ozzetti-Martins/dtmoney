import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextUser } from "../../../../Domain/auth/useContext";

interface SignInFormData {
  email: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
});

export const SendForgotPasswordEmailViewModel = () => {
  const { sendForgotPassword } = useContextUser();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;
  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    sendForgotPassword(values.email);
  };
  return {
    register,
    handleSubmit,
    errors,
    handleSignIn,
  };
};
