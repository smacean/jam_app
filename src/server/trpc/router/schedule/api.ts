// src/server/trpc/router/schedule/api.ts
import { router, publicProcedure } from "@src/server/trpc/core";
import { prisma } from "@/src/lib/db";
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
          eventId: input.eventId ?? null,
        },
      });

      return {
        ...schedule,
        startAt: new Date(schedule.startAt),
        endAt: new Date(schedule.endAt),
        createdAt: new Date(schedule.createdAt),
        updatedAt: new Date(schedule.updatedAt),
        gatherAt: schedule.gatherAt ? new Date(schedule.gatherAt) : undefined,
      };
    }),
  getAll: publicProcedure.query(async () => {
    return await prisma.schedule.findMany();
  }),
});
