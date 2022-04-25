import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  console.log(errors);
  const handleSignIn: SubmitHandler<SignInFormData> = (values,event) => {
    event?.preventDefault()
    console.log(values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          type="text"
          placeholder="email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
