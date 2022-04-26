import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export function Login() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const handleSignIn: SubmitHandler<SignInFormData> = async (
    values: SignInFormData
  ) => {
    console.log(values, "validado");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          type="email"
          Label="email"
          placeholder="email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          type="password"
          Label="password"
          placeholder="senha"
          error={errors.password}
          {...register("password")}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
