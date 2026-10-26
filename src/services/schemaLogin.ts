import * as yup from "yup"


const schemaLogin = yup
  .object({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: yup.string().required("Senha é obrigatória")
  })
  .required()

export type UserInputSchema = yup.InferType<typeof schemaLogin>;
export default schemaLogin;