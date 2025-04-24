'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FullCalendar, { EventClickArg, EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import allLocales from '@fullcalendar/core/locales-all';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';
import Header from '../components/header';

export default function HomePage() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [events, setEvents] = useState<EventInput[]>([]);
  const [form, setForm] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = () => {
    const { title, date, startTime, endTime } = form;
    if (!title || !date || !startTime || !endTime) {
      alert('すべての項目を入力してください');
      return;
    }

    const newEvent: EventInput = {
      title,
      start: `${date}T${startTime}`,
      end: `${date}T${endTime}`,
      allDay: false,
    };

    setEvents((prev) => [...prev, newEvent]);
    setForm({ title: '', date: '', startTime: '', endTime: '' });
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`「${clickInfo.event.title}」を削除しますか？`)) {
      clickInfo.event.remove();

      setEvents((prevEvents) =>
        prevEvents.filter((event) => {
          const eventStart = typeof event.start === 'string'
            ? event.start
            : event.start?.toISOString();
          const clickStart = clickInfo.event.start?.toISOString();

          return !(event.title === clickInfo.event.title && eventStart === clickStart);
        })
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div> 
        <Header />
      </div>
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
        editable
        selectable
        selectMirror
        dayMaxEvents
        events={events}
        eventClick={session ? handleEventClick : undefined}
      />
      <h2 className="text-xl font-bold mb-2">イベント追加フォーム</h2>
          <div className="flex flex-col gap-2 mb-4">
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
              onClick={handleAddEvent}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              イベント追加
            </button>
          </div>
        </div>
        );
}