import { z } from "zod";

export const ReminderInput = z.object({
  message: z.string().min(1),
  remindAt: z.string().datetime(),
});
export type ReminderInput = z.infer<typeof ReminderInput>;

// 出力用（DBのsnake_caseをAPIのcamelに寄せる方針ならこちら）
export const ReminderOutput = z.object({
  id: z.string(),
  message: z.string(),
  remindAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type ReminderOutput = z.infer<typeof ReminderOutput>;
