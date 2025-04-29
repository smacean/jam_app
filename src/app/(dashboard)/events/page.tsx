// イベント一覧ページ
// app/events/page.tsx
import Link from "next/link";

// イベント型
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
};

// 仮のデータ取得関数（後でDB接続に変更）
async function getEvents(): Promise<Event[]> {
  return [
    { id: 1, title: "イベントA", date: "2025-05-01", location: "東京" },
    { id: 2, title: "イベントB", date: "2025-06-15", location: "大阪" },
  ];
}

// イベント一覧ページ
export default async function EventsPage() {
  const events = await getEvents(); // イベントデータ取得

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">イベント一覧</h1>

      {/* 作成ボタン */}
      <div className="mb-6">
        <Link href="/events/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            イベント作成
          </button>
        </Link>
      </div>

      {/* イベントリスト */}
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date} - {event.location}</p>
            <div className="mt-2">
              <Link href={`/events/${event.id}`}>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
                  詳細を見る
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
