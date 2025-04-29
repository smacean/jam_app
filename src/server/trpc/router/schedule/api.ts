// src/server/trpc/router/schedule/api.ts
import { router, publicProcedure } from "@src/server/trpc/core";
import { prisma } from "@src/lib/prisma";
import { createScheduleInputSchema, scheduleSchema } from "./def";

export const scheduleRouter = router({
  create: publicProcedure
    .input(createScheduleInputSchema)
    .output(scheduleSchema)
    .mutation(async ({ input }) => {
      const schedule = await prisma.schedule.create({
        data: {
          name: input.name,
          startAt: input.startAt,
          endAt: input.endAt,
          gatherAt: input.gatherAt,
          gatherPlace: input.gatherPlace,
          eventId: input.eventId ?? null, // ← Prismaに渡すときundefinedは禁止なのでnullに変換！
        },
      });
      return schedule;
    }),

  getAll: publicProcedure.query(async () => {
    const schedules = await prisma.schedule.findMany();
    return schedules;
  }),
});
