import { yupResolver } from "@hookform/resolvers/yup";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateInFormData,
  createInFormSchema,
} from "../../../../utils/validations/created";
import { useContextUser } from "../../../../Domain/auth/useContext";

export const RegisterViewModal = () => {
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

  return {
    register,
    handleSubmit,
    errors,
    handleCreatedIn,
    error,
  };
};
