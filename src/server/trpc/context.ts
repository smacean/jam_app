// src/server/trpc/context.ts
import { prisma } from "@src/lib/prisma";

export async function createContext() {
  return { prisma };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
