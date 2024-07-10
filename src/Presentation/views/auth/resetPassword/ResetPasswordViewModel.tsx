import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextUser } from "../../../../Domain/auth/useContext";

interface SignInFormData {
  password: string;
}

const signInFormSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatório"),
});

export const ResetPasswordViewModel = () => {
  const { resetPassword } = useContextUser();
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  let [token] = useSearchParams();
  const { errors } = formState;
  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    resetPassword(values.password, token.get("token"));
  };

  return {
    register,
    handleSubmit,
    errors,
    handleSignIn,
  };
};
