import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const ApiErrorSchema = z.object({
  error: z.string().openapi({ example: "Bad Request" }),
});