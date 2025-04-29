// src/utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@src/server/trpc/router/_app"; // _app.tsから型を取る！

export const trpc = createTRPCReact<AppRouter>();
