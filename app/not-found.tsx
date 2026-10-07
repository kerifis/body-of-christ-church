import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-[80vh] overflow-hidden bg-black text-white flex items-center justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[1155px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-fuchsia-600/20 to-sky-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[500px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-sky-500/20 via-teal-500/20 to-emerald-500/20 blur-3xl"
      />

      <section className="mx-auto grid max-w-2xl place-items-center px-6 py-24 sm:py-28 lg:py-32">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-gray-200">
              404 — Page not found
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Lost in transit
          </h1>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            We couldn’t find the page you were looking for. It may have been
            moved, renamed, or never existed. Let’s get you back on track.
          </p>
          <blockquote className="mt-6 border-l-2 border-white/15 pl-4 text-sm italic text-gray-300">
            “Your word is a lamp to my feet and a light to my path.” (Psalm
            119:105)
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Return Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              About BOC
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            If you believe this is an error, double‑check the URL or use the
            navigation menu.
          </p>
        </div>
      </section>
    </main>
  );
}
