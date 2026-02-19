import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("E-mail inválido"),

  senha: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial"),
});