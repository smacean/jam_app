import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';
import {
  CreateScheduleInput,
  ListSchedulesQuery,
  DeleteScheduleInput,
} from '@src/schemas/schedule';

// GET /api/schedules?page=1&perPage=50
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = ListSchedulesQuery.parse({
    page: searchParams.get('page') ?? undefined,
    perPage: searchParams.get('perPage') ?? undefined,
  });

  const { data, count, error } = await supabase
    .from('schedule') // 小文字テーブル名
    .select('*', { count: 'exact' })
    .range((query.page - 1) * query.perPage, query.page * query.perPage - 1);

  if (error) {
    console.error('Supabase GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    items: data ?? [],
    total: count ?? 0,
    page: query.page,
    perPage: query.perPage,
  });
}

// POST /api/schedules
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = CreateScheduleInput.parse(body);

  const { data, error } = await supabase
    .from('schedule')
    .insert([
      {
        name: parsed.name,
        start_at: parsed.startAt,
        end_at: parsed.endAt,
        gather_at: parsed.gatherAt ?? null,
        gather_place: parsed.gatherPlace ?? null,
        event_id: parsed.eventId ?? null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Supabase POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE /api/schedules?id=xxx
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id)
    return NextResponse.json({ error: 'id is required' }, { status: 400 });

  const parsed = DeleteScheduleInput.parse({ id });

  const { data, error } = await supabase
    .from('schedule')
    .delete()
    .eq('id', parsed.id)
    .select();

  if (error) {
    console.error('Supabase DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data?.length)
    return NextResponse.json({ error: 'schedule not found' }, { status: 404 });

  return NextResponse.json({ success: true });
}
