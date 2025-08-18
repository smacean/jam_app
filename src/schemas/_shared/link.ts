import { z } from "zod";

export const LinkInput = z.object({
  url: z.string().url().openapi({ example: "https://zoom.us/j/xxxx" }),
});
export type LinkInput = z.infer<typeof LinkInput>;

export const LinkOutput = z.object({
  id: z.string(),
  url: z.string().url(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type LinkOutput = z.infer<typeof LinkOutput>;
