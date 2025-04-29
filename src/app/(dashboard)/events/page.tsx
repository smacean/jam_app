// イベント一覧ページ
// app/events/page.tsx

import Image from "next/image"; // 画像用
import Link from "next/link";

// イベント型
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;  // 追加: 写真URL
  description: string; // 追加: 説明文
};

// 仮データ取得関数
async function getEvents(): Promise<Event[]> {
  return [
    { id: 1, title: "イベントA", date: "6月上旬", location: "東京", imageUrl: "/event1.jpg", description: "東京で開催される音楽イベントです。" },
    { id: 2, title: "イベントB", date: "2025-06-15", location: "大阪", imageUrl: "/event2.jpg", description: "大阪の有名なマラソン大会です。" },
    { id: 3, title: "イベントC", date: "2025-07-20", location: "名古屋", imageUrl: "/event3.jpg", description: "名古屋で夏祭りが開催されます。" },
    { id: 4, title: "イベントD", date: "2025-08-05", location: "札幌", imageUrl: "/event4.jpg", description: "北海道で行われるビールフェスティバル。" },
    { id: 5, title: "イベントE", date: "2025-09-10", location: "福岡", imageUrl: "/event5.jpg", description: "福岡の伝統的な踊りイベントです。" },
    { id: 6, title: "イベントF", date: "2025-10-15", location: "沖縄", imageUrl: "/event6.jpg", description: "沖縄の文化を体験できるフェスティバル。" },
    { id: 7, title: "イベントG", date: "2025-11-20", location: "京都", imageUrl: "/event7.jpg", description: "紅葉の京都で行われる特別な展示会。" },
  ];
}

// イベント一覧ページ
export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">イベント一覧</h1>

      <div className="grid grid-cols-2 gap-4 overflow-y-scroll h-[calc(100vh-100px)]">
        {events.map((event) => (
          <div key={event.id} className="border rounded-lg shadow p-2 flex flex-col h-[250px]">
              
              {/* タイトル・日付・場所 */}
              <div className="mb-1 min-h-[48px]">
                <h2 className="text-xl font-bold leading-tight truncate">{event.title}</h2>
                <p className="text-xs text-gray-500 truncate">{event.date} - {event.location}</p>
              </div>

              {/* 画像 */}
              <div className="relative w-full h-[96px] mb-2 rounded overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>


              {/* 説明エリア + 詳細ボタン */}
              <div className="flex flex-col justify-between h-[56px] relative">
                {/* 説明文 */} 
                    <div className="text-[10px] text-gray-700 line-clamp-2 pr-12">
                        {/* 文字数制限してボタンにかぶらないように */}
                        {event.description.length > 40
                        ? event.description.slice(0, 40) + "..."
                        : event.description}
                    </div>
               
                {/* 詳細ボタン */}
                <div className="absolute bottom-0 right-0">
                    <Link href={`/events/${event.id}`}>
                        <button
                            className="bg-blue-500 text-white text-[10px] rounded"
                            style={{ width: "40px", height: "30px" }}
                        >
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


