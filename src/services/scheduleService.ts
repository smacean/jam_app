// src/services/scheduleService.ts
// 目的: ルートハンドラからDB操作ロジックを分離し、テスト/再利用しやすくする。

import { prisma } from "@src/lib/db";
import type { CreateScheduleInput } from "@src/schemas/schedule";

// 新規作成
export async function createSchedule(input: CreateScheduleInput) {
  const created = await prisma.schedule.create({
    data: {
      name: input.name,
      // 受け取ったISO文字列をDateに変換してDB保存
      startAt: new Date(input.startAt),
      endAt: new Date(input.endAt),
      gatherAt: input.gatherAt ? new Date(input.gatherAt) : null,
      gatherPlace: input.gatherPlace ?? null,
      eventId: input.eventId ?? null,
    },
  });

  return shape(created);
}

// 一覧取得（ページング）
export async function listSchedules(page: number, perPage: number) {
  const skip = (page - 1) * perPage;

  const [rows, total] = await Promise.all([
    prisma.schedule.findMany({
      skip,
      take: perPage,
      orderBy: { createdAt: "desc" },
    }),
    prisma.schedule.count(),
  ]);

  return {
    items: rows.map(shape),
    total,
    page,
    perPage,
  };
}

// DBのDateをISO文字列へ変換してAPI契約に合わせる
function shape(row: any) {
  return {
    // id が number でも API では string に統一して返す
    id: String(row.id),
    name: row.name,
    startAt: row.startAt?.toISOString(),
    endAt: row.endAt?.toISOString(),
    gatherAt: row.gatherAt ? row.gatherAt.toISOString() : undefined,
    gatherPlace: row.gatherPlace ?? null,
    eventId: row.eventId ?? null,
    createdAt: row.createdAt?.toISOString(),
    updatedAt: row.updatedAt?.toISOString(),
  };
}
