// src/features/calender/hooks/useSchedule.tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { paths, components } from '@src/generated/openapi/openapi';

// 型エイリアスを定義して使いやすくする
type ListSchedulesResponse =
  paths['/api/schedules']['get']['responses']['200']['content']['application/json'];
type CreateScheduleInput = components['schemas']['CreateScheduleInput'];

// APIキーを定義（キャッシュ管理に利用）
const schedulesQueryKey = ['schedules'];

// =======================
// API呼び出し関数
// =======================

/** スケジュール一覧を取得する */
const fetchSchedules = async (): Promise<ListSchedulesResponse> => {
  const response = await fetch('/api/schedules');
  if (!response.ok) {
    throw new Error('Failed to fetch schedules');
  }
  return response.json();
};

/** スケジュールを新規作成する */
const createSchedule = async (
  input: CreateScheduleInput,
): Promise<components['schemas']['Schedule']> => {
  const response = await fetch('/api/schedules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    // エラーレスポンスをパースして詳細なエラーメッセージを取得
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create schedule');
  }
  return response.json();
};

/** スケジュールを削除する */
const deleteSchedule = async (id: string): Promise<{ success: boolean }> => {
  const response = await fetch(`/api/schedules?id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to delete schedule');
  }
  return response.json();
};

// =======================
// カスタムフック
// =======================

/**
 * スケジュール一覧を取得するためのカスタムフック
 */
export const useSchedules = () => {
  return useQuery({
    queryKey: schedulesQueryKey,
    queryFn: fetchSchedules,
  });
};

/**
 * スケジュールを作成するためのカスタムフック
 * 成功するとスケジュール一覧のキャッシュを無効化し、自動で再取得させる
 */
export const useCreateSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      // キャッシュを無効化して一覧を再取得
      queryClient.invalidateQueries({ queryKey: schedulesQueryKey });
    },
    // ここで onError を定義して、エラー時のUIフィードバック（トースト表示など）も可能
  });
};

/**
 * スケジュールを削除するためのカスタムフック
 * 成功するとスケジュール一覧のキャッシュを無効化し、自動で再取得させる
 */
export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: schedulesQueryKey });
    },
  });
};
