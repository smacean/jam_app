// イベント詳細編集ページ
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FullCalendar, { EventClickArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import allLocales from "@fullcalendar/core/locales-all";
import { supabase } from "../../../../lib/supabase";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, date, startTime, endTime } = form;
    if (!title || !date || !startTime || !endTime) {
      alert("すべての項目を入力してください");
      return;
    }

    const newEvent: EventInput = {
      title,
      start: `${date}T${startTime}`,
      end: `${date}T${endTime}`,
      allDay: false,
    };

    setEvents((prev) => [...prev, newEvent]);
    setForm({ title: "", date: "", startTime: "", endTime: "" });
    setIsModalOpen(false);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`「${clickInfo.event.title}」を削除しますか？`)) {
      clickInfo.event.remove();

      setEvents((prevEvents) =>
        prevEvents.filter((event) => {
          const eventStart =
            typeof event.start === "string"
              ? event.start
              : event.start?.toISOString();
          const clickStart = clickInfo.event.start?.toISOString();

          return !(
            event.title === clickInfo.event.title && eventStart === clickStart
          );
        }),
      );
    }
  };

  return (
    <div className="p-6">
      {/* 上部ボタンエリア */}
      <div className="flex items-center justify-between mb-6">
        {/* 左側：ログイン・ログアウト */}
        <div className="flex items-center gap-4">
          {loading ? (
            <div>Loading...</div>
          ) : session ? (
            <>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm"
                onClick={handleLogout}
              >
                ログアウト
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm">
                ログイン
              </button>
            </Link>
          )}
        </div>

        {/* 右側：モーダルを開く */}
        {session && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm"
            onClick={() => setIsModalOpen(true)}
          >
            イベントを追加
          </button>
        )}
      </div>

      {/* カレンダー本体 */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="timeGridWeek"
        height="auto"
        locales={allLocales}
        locale="ja"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={!!session}
        selectable={!!session}
        selectMirror={!!session}
        dayMaxEvents
        events={events}
        eventClick={session ? handleEventClick : undefined}
      />

      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">イベントを追加する</h2>
            <form onSubmit={handleAddEvent} className="flex flex-col gap-4">
              <input
                name="title"
                value={form.title}
                onChange={handleInputChange}
                placeholder="イベント名"
                className="border p-2 rounded"
              />
              <input
                name="date"
                value={form.date}
                onChange={handleInputChange}
                type="date"
                className="border p-2 rounded"
              />
              <input
                name="startTime"
                value={form.startTime}
                onChange={handleInputChange}
                type="time"
                className="border p-2 rounded"
              />
              <input
                name="endTime"
                value={form.endTime}
                onChange={handleInputChange}
                type="time"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
              >
                追加する
              </button>
            </form>
            <button
              className="mt-4 text-sm text-gray-500 hover:underline"
              onClick={() => setIsModalOpen(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
