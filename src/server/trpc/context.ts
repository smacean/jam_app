// src/server/trpc/context.ts
import { prisma } from "@/src/lib/db";

export async function createContext() {
  return { prisma };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
