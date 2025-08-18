// src/app/api/schedules/route.ts
// 目的: HTTPエンドポイント。Zodで入力検証→サービス層でPrisma→Zodで出力保証。
// PrismaはEdge Runtime非対応のためNode.jsランタイムを明示。
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import {
  ApiErrorSchema,
  CreateScheduleInput,
  ListSchedulesQuery,
  ListSchedulesResponse,
  Schedule,
} from "@src/schemas/schedule";
import { createSchedule, listSchedules } from "@src/services/scheduleService";
// --- 追加: 失敗原因をログするため（返却ボディはOpenAPIに合わせて簡素に保つ）
import { ZodError } from "zod";

// 一覧取得: GET /api/schedules?page=1&perPage=50
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    // クエリをZodでパース（型変換も含む）
    // ★ 追加ポイント: URLSearchParams.get() は null を返すため、default() を効かせるには undefined に揃える
    const q = ListSchedulesQuery.parse({
      page: searchParams.get("page") ?? undefined,
      perPage: searchParams.get("perPage") ?? undefined,
    });

    // DB取得
    const result = await listSchedules(q.page, q.perPage);

    // 念のため出力もZodで形保証（契約違反を早期検知）
    return NextResponse.json(ListSchedulesResponse.parse(result), {
      status: 200,
    });
  } catch (e) {
    // --- 追加: 何で落ちたかをサーバログに出す（返却JSONはOpenAPIに合わせて最小）
    if (e instanceof ZodError) {
      console.error("GET /api/schedules ZodError:", e.flatten());
    } else {
      console.error("GET /api/schedules Error:", e);
    }
    return NextResponse.json(ApiErrorSchema.parse({ error: "Invalid query" }), {
      status: 400,
    });
  }
}

// 作成: POST /api/schedules  (JSON body)
export async function POST(req: NextRequest) {
  try {
    // 入力ボディ検証（ここでdatetimeのフォーマット等もチェック）
    // ★ 補足: 現行のOpenAPI(=Zod)では null は許容しないため、gatherAt/gatherPlace/eventId を送らないか、正しい型で送る
    const body = CreateScheduleInput.parse(await req.json());

    // DB作成
    const created = await createSchedule(body);

    // 出力もZodで最終保証
    return NextResponse.json(Schedule.parse(created), { status: 201 });
  } catch (e) {
    // --- 追加: 何で落ちたかをサーバログに出す（返却JSONはOpenAPIに合わせて最小）
    if (e instanceof ZodError) {
      console.error("POST /api/schedules ZodError:", e.flatten());
    } else {
      console.error("POST /api/schedules Error:", e);
    }
    return NextResponse.json(ApiErrorSchema.parse({ error: "Invalid body" }), {
      status: 400,
    });
  }
}
