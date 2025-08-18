// イベント詳細編集ページ
// src/app/(dashboard)/events/[id]/edit/page.tsx
type Props = { params: { id: string } };

export default async function EditEventPage({ params }: Props) {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">
        編集ページは準備中です（ID: {params.id}）
      </h1>
    </main>
  );
}
