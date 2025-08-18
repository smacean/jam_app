// src/app/api/schedules/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@src/lib/db';
import {
  CreateScheduleInput,
  DeleteScheduleInput,
  AllListSchedulesInput,
} from '@src/schemas/schedule';

export const runtime = 'nodejs'; // Prisma を使うため

// GET /api/schedules?page=1&perPage=50 （まずは全部返す簡易版）
export async function GET(req: NextRequest) {
  try {
    // ページング使うならここでパース
    // const { searchParams } = new URL(req.url);
    // const query = AllListSchedulesInput.parse({});
    // const page = Number(searchParams.get('page') ?? '1');
    // const perPage = Number(searchParams.get('perPage') ?? '50');

    const rows = await prisma.schedule.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        // 必要に応じて関連も
        // reminder: true, link: true, ...
      },
    });

    // PrismaはcamelCase（startAt等）なので、そのまま返す
    return NextResponse.json({
      items: rows.map((r) => ({
        id: r.id,
        name: r.name,
        startAt: r.startAt?.toISOString() ?? null,
        endAt: r.endAt?.toISOString() ?? null,
        gatherAt: r.gatherAt?.toISOString() ?? null,
        gatherPlace: r.gatherPlace ?? null,
        eventId: r.eventId ?? null,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      })),
      // total, page, perPage を返すなら count も回す
    });
  } catch (e: any) {
    console.error('GET /api/schedules error:', e);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

// POST /api/schedules
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateScheduleInput.parse(body);

    // ★ フロントが "YYYY-MM-DDTHH:mm:ss.SSSZ" を投げてくる前提
    // 末尾Z付きはUTCとして解釈されます（JSTずれに注意）
    const created = await prisma.schedule.create({
      data: {
        name: parsed.name,
        startAt: new Date(parsed.startAt),
        endAt: new Date(parsed.endAt),
        gatherAt: parsed.gatherAt ? new Date(parsed.gatherAt) : null,
        gatherPlace: parsed.gatherPlace ?? null,
        eventId: parsed.eventId ?? null,
      },
    });

    return NextResponse.json({
      id: created.id,
      name: created.name,
      startAt: created.startAt?.toISOString() ?? null,
      endAt: created.endAt?.toISOString() ?? null,
      gatherAt: created.gatherAt?.toISOString() ?? null,
      gatherPlace: created.gatherPlace ?? null,
      eventId: created.eventId ?? null,
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString(),
    });
  } catch (e: any) {
    console.error('POST /api/schedules error:', e);
    return NextResponse.json(
      { error: e?.message ?? 'Bad Request' },
      { status: 400 },
    );
  }
}

// DELETE /api/schedules?id=xxx
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id)
      return NextResponse.json({ error: 'id is required' }, { status: 400 });

    DeleteScheduleInput.parse({ id });

    await prisma.schedule.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error('DELETE /api/schedules error:', e);
    const notFound = e?.code === 'P2025'; // Prisma の Record not found
    return NextResponse.json(
      { error: notFound ? 'schedule not found' : 'Internal Server Error' },
      { status: notFound ? 404 : 500 },
    );
  }
}
