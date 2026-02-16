import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido"),

  senha: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial"),
});

export type LoginData = z.infer<typeof loginSchema>;
