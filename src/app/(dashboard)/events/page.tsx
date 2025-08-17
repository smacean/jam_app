//イベント一覧ページ

import EventContents, {
  Event,
} from "../../../features/events/components/EventContents";

async function getEvents(): Promise<Event[]> {
  return [
    {
      id: 1,
      title: "夏メル",
      date: "8月上旬",
      location: "土浦CLUB GOLD",
      imageUrl: "/Hiphopいくま.png",
      description: "一年生の初参加イベント高レベルショーケース盛り沢山",
    },
    {
      id: 2,
      title: "イベントB",
      date: "2025-06-15",
      location: "大阪",
      imageUrl: "/Hiphopゆきと.png",
      description: "大阪の有名なマラソン大会です。",
    },
    {
      id: 3,
      title: "イベントC",
      date: "2025-07-20",
      location: "名古屋",
      imageUrl: "/window.svg",
      description: "名古屋で夏祭りが開催されます。",
    },
    {
      id: 4,
      title: "イベントD",
      date: "2025-08-05",
      location: "札幌",
      imageUrl: "/Lockかずき１.png",
      description: "北海道で行われるビールフェスティバル。",
    },
    {
      id: 5,
      title: "イベントE",
      date: "2025-09-10",
      location: "福岡",
      imageUrl: "/event5.jpg",
      description: "福岡の伝統的な踊りイベントです。",
    },
    {
      id: 6,
      title: "イベントF",
      date: "2025-10-15",
      location: "沖縄",
      imageUrl: "/event6.jpg",
      description: "沖縄の文化を体験できるフェスティバル。",
    },
    {
      id: 7,
      title: "イベントG",
      date: "2025-11-20",
      location: "京都",
      imageUrl: "/event7.jpg",
      description: "紅葉の京都で行われる特別な展示会。",
    },
  ];
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">イベント一覧</h1>
      <EventContents events={events} />
    </main>
  );
}
