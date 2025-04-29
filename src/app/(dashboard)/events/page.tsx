import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

async function getEvents(): Promise<Event[]> {
  return [
    { id: 1, title: "夏メル", date: "8月上旬", location: "土浦CLUB GOLD", imageUrl: "/event1.jpg", description: "一年生の初参加イベント高レベルショーケース盛り沢山" },
    { id: 2, title: "イベントB", date: "2025-06-15", location: "大阪", imageUrl: "/event2.jpg", description: "大阪の有名なマラソン大会です。" },
    { id: 3, title: "イベントC", date: "2025-07-20", location: "名古屋", imageUrl: "/event3.jpg", description: "名古屋で夏祭りが開催されます。" },
    { id: 4, title: "イベントD", date: "2025-08-05", location: "札幌", imageUrl: "/event4.jpg", description: "北海道で行われるビールフェスティバル。" },
    { id: 5, title: "イベントE", date: "2025-09-10", location: "福岡", imageUrl: "/event5.jpg", description: "福岡の伝統的な踊りイベントです。" },
    { id: 6, title: "イベントF", date: "2025-10-15", location: "沖縄", imageUrl: "/event6.jpg", description: "沖縄の文化を体験できるフェスティバル。" },
    { id: 7, title: "イベントG", date: "2025-11-20", location: "京都", imageUrl: "/event7.jpg", description: "紅葉の京都で行われる特別な展示会。" },
  ];
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">イベント一覧</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg shadow p-2 flex flex-col items-center"
            style={{ maxWidth: "300px", maxHeight: "300px", width: "100%" }}
          >
            {/* 画像 */}
            <div className="relative w-full h-[120px] mb-2 rounded overflow-hidden">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            {/* 本文エリア */}
            <div className="flex flex-col w-full px-2">
              {/* タイトル */}
              <h2 className="text-xl font-bold leading-snug truncate">
                {event.title}
              </h2>

              {/* 日付・場所 */}
              <p className="text-sm text-gray-500 truncate">
                {(event.date.length > 10 ? event.date.slice(0, 10) + "…" : event.date)} - {(event.location.length > 10 ? event.location.slice(0, 10) + "…" : event.location)}
              </p>

              {/* 説明文 */}
              <p className="text-sm text-gray-700 mt-1 line-clamp-3">
                {event.description}
              </p>

              {/* 詳細ボタン */}
              <div className="flex justify-end mt-auto pt-2">
                <Link href={`/events/${event.id}`}>
                  <button className="bg-blue-500 text-white text-xs rounded w-10 h-8">
                    詳細
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
