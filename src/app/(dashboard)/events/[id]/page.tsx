import EventDetail, {
  EventYear,
  EventDetailItem,
} from "../../../../features/events/components/EventDetail";

type PageProps = { params: { id: string } };

// デモ用データ（実際はDB/APIへ差し替え）
async function getEventDetail(
  id: number
): Promise<{ title: string; years: EventYear[] }> {
  const y2025: EventDetailItem = {
    date: "2025-08-05",
    time: "18:00-20:00",
    shikkodai: "¥3,000",
    location: "札幌・ビールフェス特設会場",
    imageUrl: "/file.svg",
    description: "北海道で行われるビールフェスティバル。道内外から多数出演。",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  const y2024: EventDetailItem = {
    date: "2024-08-10",
    time: "17:00-19:30",
    shikkodai: "¥2,500",
    location: "土浦CLUB GOLD",
    imageUrl: "/next.svg",
    description: "一年生の初参加イベント。高レベルショーケースが盛り沢山！",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  };

  const y2023: EventDetailItem = {
    date: "2023-11-20",
    time: "11:00-19:00",
    shikkodai: "¥1,200",
    location: "京都・岡崎",
    imageUrl: "/event7.jpg",
    description: "紅葉の京都で行われる特別な展示会。アート作品も多数展示。",
    // youtubeUrl: undefined
  };

  const years: EventYear[] = [
    { year: 2025, detail: y2025 },
    { year: 2024, detail: y2024 },
    { year: 2023, detail: y2023 },
  ];

  return { title: `イベント #${id}`, years };
}

export default async function EventDetailPage({ params }: PageProps) {
  const id = Number(params.id);
  const { title, years } = await getEventDetail(id);

  return (
    <main className="p-4 md:p-6">
      <EventDetail title={title} years={years} />
    </main>
  );
}
