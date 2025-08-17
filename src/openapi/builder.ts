// src/openapi/builder.ts
// 目的: Zodスキーマとエンドポイント定義からOpenAPI(JSON)を生成する。
// ここに「APIの一覧・入出力・ステータス」を集約し、/api/openapi で配る。

import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import {
  ApiErrorSchema,
  CreateScheduleInput,
  ListSchedulesQuery,
  ListSchedulesResponse,
  Schedule,
} from "@src/schemas/schedule";

const registry = new OpenAPIRegistry();

// スキーマ登録（名前をつけると他の場所から参照される）
registry.register("Schedule", Schedule);
registry.register("CreateScheduleInput", CreateScheduleInput);
registry.register("ListSchedulesQuery", ListSchedulesQuery);
registry.register("ListSchedulesResponse", ListSchedulesResponse);
registry.register("ApiError", ApiErrorSchema);

// GET /api/schedules
registry.registerPath({
  method: "get",
  path: "/api/schedules",
  summary: "List schedules",
  request: {
    query: ListSchedulesQuery, // クエリはZodのまま
  },
  responses: {
    200: {
      description: "OK",
      content: { "application/json": { schema: ListSchedulesResponse } },
    },
    400: {
      description: "Bad Request",
      content: { "application/json": { schema: ApiErrorSchema } },
    },
  },
});

// POST /api/schedules
registry.registerPath({
  method: "post",
  path: "/api/schedules",
  summary: "Create schedule",
  request: {
    body: {
      content: { "application/json": { schema: CreateScheduleInput } },
    },
  },
  responses: {
    201: {
      description: "Created",
      content: { "application/json": { schema: Schedule } },
    },
    400: {
      description: "Bad Request",
      content: { "application/json": { schema: ApiErrorSchema } },
    },
  },
});

export function generateOpenApiDoc() {
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.0.3",
    info: { title: "Jam App API", version: "1.0.0" },
    // 同一オリジンで使うので空文字（相対URL）
    servers: [{ url: "" }],
  });
}
