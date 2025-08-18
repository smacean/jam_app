import { z } from "zod";

export const ApiErrorSchema = z.object({
  error: z.string().openapi({ example: "Invalid body" }),
});
export type ApiError = z.infer<typeof ApiErrorSchema>;
