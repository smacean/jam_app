// src/lib/db.ts
// 目的: 開発中のHot Reloadで new PrismaClient() が増殖しないように、グローバルに1個だけ保持する。

import { PrismaClient } from "@prisma/client";

// Next.js (dev) のHMRで再実行されても1個を再利用するための格納場所
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// すでに存在すればそれを使い、なければ新規作成
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // 開発時はクエリ/警告/エラーをログ出力。本番はエラーのみ。
    log: process.env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["error"],
  });

// 本番以外（=dev）ではグローバルに保持して再生成を防ぐ
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
