import { forwardRef, ForwardRefRenderFunction } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContextUser } from "../../context/useContext";
import {
  CreateInFormData,
  createInFormSchema,
} from "../../utils/validations/created";
import { Input } from "../Form/Input";
//ref={animeForm}

const RegisterBase: ForwardRefRenderFunction<HTMLFormElement> = () => {
  const { userRegister, error } = useContextUser();

  const { register, handleSubmit, formState } = useForm<CreateInFormData>({
    resolver: yupResolver(createInFormSchema),
  });
  const { errors } = formState;
  const handleCreatedIn: SubmitHandler<CreateInFormData> = async (
    values: CreateInFormData
  ) => {
    userRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  return (
    <form onSubmit={handleSubmit(handleCreatedIn)}>
      <h2>Criar Conta</h2>
      <Input
        type="text"
        Label="nome"
        placeholder="nome"
        {...register("name")}
        error={errors.name}
      />
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
      <button type="submit">Criar conta</button>
      <p>{error}</p>
    </form>
  );
};
export const Register = forwardRef(RegisterBase);
