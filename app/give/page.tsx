import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give | Body of Christ Church | Body of Christ Church Edmonton",
  description:
    "Partner with Body of Christ Church, Edmonton. Your generosity fuels worship, discipleship, and outreach across our city.",
};

export default function GivePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-amber-400/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="lg:max-w-xl">
              <p className="text-sm tracking-widest text-gray-300 uppercase">
                GIVING
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Giving
              </h1>
              <p className="mt-4 max-w-prose text-gray-300">
                Thank you for partnering with Body of Christ Church. Your
                generosity helps support worship, discipleship, and outreach
                across our city.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-gray-100"
                  href="#ways"
                >
                  View ways to give
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-amber-400/10 blur-3xl" />
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-400/40 shadow-2xl">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                  <Image
                    src="/home-image.jpg"
                    alt="Outreach and worship at Body of Christ Church"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-90"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="ways" className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ways to give
            </h2>
            <p className="text-sm text-gray-300">
              Choose the option that’s easiest for you. Online giving opens in a
              new tab.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Online, In-Person & E-transfer options */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Giving options
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Your support helps us serve people and build community.
                  </p>
                </div>

                <details className="relative mt-4 sm:mt-0 group">
                  <summary className="list-none [&::-webkit-details-marker]:hidden inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 cursor-pointer">
                    Give online
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="absolute right-0 z-20 mt-2 w-60 overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-xl backdrop-blur">
                    <a
                      href="https://give.tithe.ly/?formId=dfb008e2-6510-43a0-9aa0-8915d891b13c&giving_to=General%20Funds"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 transition"
                    >
                      General Funds
                    </a>
                    <a
                      href="https://give.tithe.ly/?formId=dfb008e2-6510-43a0-9aa0-8915d891b13c&giving_to=Offering"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 transition"
                    >
                      Offering
                    </a>
                    <a
                      href="https://give.tithe.ly/?formId=dfb008e2-6510-43a0-9aa0-8915d891b13c&giving_to=Tithe"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 transition"
                    >
                      Tithe
                    </a>
                  </div>
                </details>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-white">In person</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gray-400">•</span>
                      <span>Cash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-gray-400">•</span>
                      <span>
                        Cheques payable to{" "}
                        <span className="text-white font-medium">
                          Body of Christ Church
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-white">E-transfer</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Send e-transfer to
                  </p>
                  <p className="mt-2 inline-flex rounded-full border border-white/10 bg-black px-4 py-2 text-sm font-medium text-white select-all">
                    give@bocchurch.ca
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    (Add a message if you’d like us to allocate your gift.)
                  </p>
                </div>
              </div>
            </div>

            {/* Scripture Card */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Scripture</h3>
                <blockquote className="mt-4 text-sm leading-relaxed text-gray-200 italic">
                  “So let each one give as he purposes in his heart, not
                  grudgingly or of necessity; for God loves a cheerful giver.”
                </blockquote>
              </div>
              <p className="mt-4 text-sm text-gray-400">— 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
