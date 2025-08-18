"use client";

import { useState, useEffect } from "react";
import FullCalendar, { EventClickArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import allLocales from "@fullcalendar/core/locales-all";

interface ScheduleEvent {
  id: string;
  name: string;
  start_at: string;
  end_at: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<EventInput[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  // API からスケジュール取得
  const fetchSchedules = async () => {
    try {
      const res = await fetch("/api/schedules");
      const data = await res.json();
      const mappedEvents: EventInput[] = (data.items ?? []).map(
        (s: ScheduleEvent) => ({
          id: s.id,
          title: s.name,
          start: s.start_at,
          end: s.end_at,
        })
      );
      setEvents(mappedEvents);
    } catch (err) {
      console.error("fetchSchedules error:", err);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, date, startTime, endTime } = form;
    if (!title || !date || !startTime || !endTime) {
      alert("すべての項目を入力してください");
      return;
    }

    const body = {
      name: title,
      startAt: `${date}T${startTime}:00.000Z`,
      endAt: `${date}T${endTime}:00.000Z`,
    };

    try {
      const res = await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        alert("スケジュール作成に失敗しました");
        return;
      }

      const newEvent = await res.json();
      setEvents((prev) => [
        ...prev,
        {
          id: newEvent.id,
          title: newEvent.name,
          start: newEvent.start_at,
          end: newEvent.end_at,
        },
      ]);
      setForm({ title: "", date: "", startTime: "", endTime: "" });
      setIsModalOpen(false);
    } catch (err) {
      console.error("handleAddEvent error:", err);
    }
  };

  const handleEventClick = async (clickInfo: EventClickArg) => {
    if (!confirm(`「${clickInfo.event.title}」を削除しますか？`)) return;

    try {
      const res = await fetch(`/api/schedules?id=${clickInfo.event.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("削除に失敗しました");
        return;
      }

      clickInfo.event.remove();
    } catch (err) {
      console.error("handleEventClick error:", err);
    }
  };

  return (
    <div className="p-6">
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        イベントを追加
      </button>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        height="auto"
        locales={allLocales}
        locale="ja"
        headerToolbar={{ left: "prev", center: "title", right: "next" }}
        dayCellContent={(arg) => ({
          html: `${arg.dayNumberText.split("日")[0]}`,
        })}
        eventContent={(arg) => ({
          html: `<div style="font-size:10px">${arg.event.title}</div>`,
        })}
        editable
        selectable
        events={events}
        eventClick={handleEventClick}
      />

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
