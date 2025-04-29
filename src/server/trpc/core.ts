// src/server/trpc/core.ts
import { initTRPC } from "@trpc/server";
import { Context } from "@src/server/trpc/context"; // 既にcontext.tsは作っている前提

// tRPCのインスタンスを初期化
const t = initTRPC.context<Context>().create();

/**
 * ルーター生成用
 */
export const router = t.router;

/**
 * 公開されるProcedure（誰でも叩ける）
 */
export const publicProcedure = t.procedure;

/**
 * 認証付きProcedure（後で追加したい場合）
 * 例: export const protectedProcedure = t.procedure.use(middleware認証)
 */
