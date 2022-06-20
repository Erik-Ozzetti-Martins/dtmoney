import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { useContextUser } from "../../context/useContext";
import { Container } from "./sendForgotPassword";
import money from "../../assets/money.gif";
import { Link } from "react-router-dom";

interface SignInFormData {
  email: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
});

export function SendForgotPasswordEmail() {
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
}
