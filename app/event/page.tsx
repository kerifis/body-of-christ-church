"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import ImageModal from "@/components/ImageModal";

interface EventItem {
  _id?: string;
  name: string;
  location?: string;
  date: string;
  imageUrl?: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "this-month" | "next-month">("all");

  const fetchEvents = async () => {
    try {
      const res = await fetch("/events/events.json", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if (!res.ok) {
        toast.error("Could not fetch events");
        return;
      }
      const data = await res.json();
      const valid = (Array.isArray(data) ? data : []).filter(
        (e: EventItem) => e?.imageUrl?.trim()
      );
      valid.sort(
        (a: EventItem, b: EventItem) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setEvents(valid);
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : "Could not get events";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const now = new Date();
  const filteredEvents = events.filter((e) => {
    if (filter === "all") return true;
    const eDate = new Date(e.date);
    if (filter === "this-month") {
      return (
        eDate.getMonth() === now.getMonth() &&
        eDate.getFullYear() === now.getFullYear()
      );
    }
    if (filter === "next-month") {
      const nextMonth = (now.getMonth() + 1) % 12;
      const nextYear =
        nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
      return (
        eDate.getMonth() === nextMonth && eDate.getFullYear() === nextYear
      );
    }
    return true;
  });

  return (
    <main className="bg-black text-white min-h-[80vh]">
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Events
              </h1>
              <p className="mt-2 max-w-2xl text-gray-300">
                Join what’s happening at Body of Christ.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full border px-3 py-1.5 transition ${
                  filter === "all"
                    ? "border-cyan-400 bg-cyan-500/20 text-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("this-month")}
                className={`rounded-full border px-3 py-1.5 transition ${
                  filter === "this-month"
                    ? "border-cyan-400 bg-cyan-500/20 text-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                This Month
              </button>
              <button
                onClick={() => setFilter("next-month")}
                className={`rounded-full border px-3 py-1.5 transition ${
                  filter === "next-month"
                    ? "border-cyan-400 bg-cyan-500/20 text-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                Next Month
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading && (
              <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
                Loading events…
              </div>
            )}

            {!loading && filteredEvents.length === 0 && (
              <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
                No events found for this filter.
              </div>
            )}

            {filteredEvents.map((item, idx) => (
              <div
                key={item._id || `${item.name}-${idx}`}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-sm hover:border-white/20 transition"
              >
                {item.imageUrl && (
                  <ImageModal
                    src={item.imageUrl}
                    alt={item.name}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full cursor-zoom-in rounded-2xl object-cover"
                  />
                )}
                {item.name && item.name !== "Church Event" && (
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    {item.date && (
                      <p className="mt-1 text-sm text-gray-400">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-gray-300">Hosting something soon?</p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-black font-semibold hover:bg-gray-100 transition"
            >
              Submit an Event
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
