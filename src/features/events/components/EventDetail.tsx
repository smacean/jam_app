import Image from "next/image";

export type EventDetailItem = {
  date: string; // "2025-08-05"（ISO推奨）
  time: string; // "18:00-20:00"
  shikkodai: string; // "¥3,000"
  location: string;
  imageUrl: string; // public 配下のパス or 外部URL（next.configで許可）
  description: string; // 少しだけ表示
  youtubeUrl?: string; // 任意
};

export type EventYear = {
  year: number; // 2025 など
  detail: EventDetailItem; // 年1回前提
};

type Props = {
  title: string;
  years: EventYear[];
};

/** 曜日を (月/火/…/日) で返す */
function weekdayJa(dateISO: string): string {
  const w = new Date(dateISO).getDay(); // 0=Sun
  return ["日", "月", "火", "水", "木", "金", "土"][w];
}

export default function EventDetail({ title, years }: Props) {
  const sorted = [...years].sort((a, b) => b.year - a.year);
  const [latest, ...rest] = sorted;

  return (
    <section className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>

      {/* 最新年度（大きめ） */}
      {latest && (
        <div className="rounded-xl border shadow p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">
              {latest.year}年度
              <span className="ml-2 align-middle text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                最新
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 画像（拡大せず中央合わせ） */}
            <div className="relative w-full h-[280px] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={latest.detail.imageUrl}
                alt={`${latest.year} ${latest.detail.location}`}
                fill
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>

            {/* 詳細 */}
            <div className="flex flex-col gap-3">
              <dl className="grid grid-cols-3 gap-y-2 text-sm">
                <dt className="font-semibold">日付</dt>
                <dd className="col-span-2">
                  {latest.detail.date}（{weekdayJa(latest.detail.date)}）
                </dd>

                <dt className="font-semibold">時間</dt>
                <dd className="col-span-2">{latest.detail.time}</dd>

                <dt className="font-semibold">執行代</dt>
                <dd className="col-span-2">{latest.detail.shikkodai}</dd>

                <dt className="font-semibold">場所</dt>
                <dd className="col-span-2">{latest.detail.location}</dd>
              </dl>

              <p className="text-sm text-gray-700">
                {latest.detail.description}
              </p>

              {latest.detail.youtubeUrl && (
                <div className="pt-1">
                  <a
                    href={latest.detail.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    YouTubeで見る
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* それ以前の年度（コンパクト） */}
      {rest.length > 0 && (
        <div className="space-y-4">
          {rest.map((y) => (
            <div
              key={y.year}
              className="rounded-lg border shadow-sm p-4 bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-40 h-28 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={y.detail.imageUrl}
                    alt={`${y.year} ${y.detail.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{y.year}年度</h3>
                  <div className="text-sm text-gray-600">
                    {y.detail.date}（{weekdayJa(y.detail.date)}） /{" "}
                    {y.detail.time}
                  </div>
                  <div className="text-sm">
                    執行代：{y.detail.shikkodai}　場所：{y.detail.location}
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2 mt-1">
                    {y.detail.description}
                  </p>
                  {y.detail.youtubeUrl && (
                    <a
                      href={y.detail.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs mt-1 underline text-red-600 hover:text-red-700"
                    >
                      YouTubeで見る
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
