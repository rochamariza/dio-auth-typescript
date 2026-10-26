import * as yup from "yup"


const schemaCadastro = yup
  .object({
    nomeCompleto: yup.string().required("Nome Completo é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: yup.string().min(8, "No mínimo 8 caracteres").required("Senha é obrigatória")
  })
  .required()

export type UserInputSchema = yup.InferType<typeof schemaCadastro>;
export default schemaCadastro;