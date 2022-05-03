import * as yup from "yup";

export interface CreateInFormData {
  name: string;
  email: string;
  password: string;
}

export const createInFormSchema = yup.object().shape({
  name: yup.string().required("nome obrigatorio"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});
;
