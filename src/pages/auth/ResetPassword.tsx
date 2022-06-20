import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { Container } from "./resetPassword";
import { useSearchParams } from "react-router-dom";
//import { useContextUser } from "../../context/useContext";
import money from "../../assets/money.gif";
import { useContextUser } from "../../context/useContext";
interface SignInFormData {
  password: string;
}

const signInFormSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatório"),
});

export function ResetPassword() {
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
}
