// src/app/api/trpc/route.ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@src/server/trpc/router/_app";
import { createContext } from "@src/server/trpc/context";

// export const runtime = "edge"; // これを入れるとNext.js Edge対応もできる（なければ消してもいい）

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST };
