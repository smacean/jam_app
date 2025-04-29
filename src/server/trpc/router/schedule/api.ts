// src/server/trpc/router/schedule/api.ts
import { publicProcedure, router } from "@src/server/trpc/core"; // ★要注意（後でまとめる）
import { prisma } from "@src/lib/prisma";
import { createScheduleInputSchema } from "./def";

export const scheduleRouter = router({
  create: publicProcedure
    .input(createScheduleInputSchema)
    .mutation(async ({ input }) => {
      const schedule = await prisma.schedule.create({
        data: {
          name: input.name,
          startAt: input.startAt,
          endAt: input.endAt,
          gatherAt: input.gatherAt,
          gatherPlace: input.gatherPlace,
          eventId: input.eventId,
          userId: input.userId,
        },
      });

      return schedule;
    }),
});
