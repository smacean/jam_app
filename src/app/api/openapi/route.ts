// src/app/api/openapi/route.ts
// 目的: OpenAPI JSONそのものを返すエンドポイント。型生成ツールがここを読む。
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { generateOpenApiDoc } from "@src/openapi/builder";

export async function GET() {
  return NextResponse.json(generateOpenApiDoc(), { status: 200 });
}
