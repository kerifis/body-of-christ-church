"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { toast } from "sonner";
import ImageModal from "@/components/ImageModal";

interface EventItem {
  _id?: string;
  name: string;
  location?: string;
  date: string;
  imageUrl?: string;
}

function EventsList() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const parallaxTransforms = [
    { translateX: [-30, 0] as [number, number] },
    { translateY: [25, 0] as [number, number] },
    { translateX: [30, 0] as [number, number] },
  ];

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

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.slice(0, 3).map((item, idx) => {
        const p = parallaxTransforms[idx % parallaxTransforms.length];
        return (
          <Parallax
            key={item._id || `${item.name}-${idx}`}
            {...p}
            opacity={[0, 1]}
            easing={[0.22, 1, 0.36, 1]}
          >
            <ImageModal
              src={item.imageUrl!}
              alt={item.name}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full cursor-zoom-in rounded-xl border border-white/10 bg-white/5 shadow-sm"
            />
          </Parallax>
        );
      })}

      {!loading && events.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300 shadow-sm backdrop-blur sm:col-span-2 lg:col-span-3">
          No upcoming events yet.
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const ministries = [
    {
      title: "Family in Christ Ministry",
      desc: "To spark a revival where transformation by God’s love and every soul is encountered by the message of salvation resulting in healing, hope and restoration.",
    },
    {
      title: "Youth Ministry",
      desc: "Our heart is to see this generation of young people revived, set on fire for God, growing deeper in their walk with Him and empowered by the Holy Spirit in everyday life. We are committed to living lives worthy of our calling, sharpening one another in faith, and walking together in Spirit-led discipleship. With boldness and love, we pursue the Great Commission—raising up youth who make disciples of all nations and carry the life-changing presence of Jesus Christ into the world.",
    },
    {
      title: "Women’s Ministry",
      desc: "Our mission is to unite women in fellowship to grow in Christ, study God’s Word, follow the example of faithful women in the Bible, and be led by the Holy Spirit. We hold monthly fellowship gatherings for encouragement and support, foster mentorship across generations and build strong relationships through prayer partnerships.",
    },
    {
      title: "Men’s Ministry",
      desc: "A brotherhood of men devoted to serving God, uplifting one another, and leading with faith at home, in the church and in the world. Through prayer, fellowship and services, we are growing together, building unity and spiritual strength with a positive impact on our families, our church and our community. Our ministry creates space for men to connect through outreach, sports, and regular gatherings. Our goal is to become stronger and committed disciples of Jesus Christ and to encourage each other to walk in faith, purpose, and integrity.",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:max-w-xl">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                A Home for Worship, Fellowship &amp; Community
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Body of Christ
                </span>{" "}
                Church
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Welcome to Body of Christ Church Edmonton! We are a Spirit-led,
                Christ-centered, and family-focused community where everyone is
                welcome. Whether you&apos;re taking your first steps in faith or
                seeking a deeper connection with God, we invite you to
                experience the love of Jesus, the power of the Holy Spirit, and
                the warmth of a faith-filled family. Join us this Sunday — Your
                life will never be the same!
              </p>
              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                      stroke="url(#hero-arrow-grad)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="hero-arrow-grad"
                        x1="3"
                        y1="7.00003"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="ml-2 text-base font-normal text-white">
                    “And the Lord added to their number day by day those who were
                    being saved.” (Acts 2:47)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 flex justify-end">
              <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl group">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-amber-400/20 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-400/40 shadow-2xl">
                  <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                    <Image
                      src="/home-image.jpg"
                      alt="Body of Christ Church"
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section
        id="visit"
        className="relative overflow-hidden bg-black text-white"
      >
        <Parallax
          translateY={[-10, 10]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Parallax
            translateX={[-30, 0]}
            opacity={[0, 1]}
            easing={[0.22, 1, 0.36, 1]}
            shouldAlwaysCompleteAnimation
          >
            <h2 className="text-2xl font-semibold">Join Us This Sunday</h2>
          </Parallax>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Parallax
              translateX={[-30, 0]}
              opacity={[0, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <p className="text-sm text-gray-300">Sunday Service</p>
                <p className="mt-1 text-xl font-semibold">4:00 PM – 6:00 PM</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-300">Midweek Service</p>
                  <p className="mt-1 text-sm text-gray-200">
                    Thursday • 7:00 PM – 10:00 PM (FAMILY IN CHRIST MINISTRY)
                  </p>
                </div>
              </div>
            </Parallax>

            <Parallax
              translateY={[25, 0]}
              opacity={[0, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <p className="text-sm text-gray-300">Location</p>
                <p className="mt-1 text-xl font-semibold">
                  13850 119A St NW, Edmonton, AB T5X 5B7
                </p>
                <p className="mt-2 text-sm text-gray-300">Church Address</p>
                <a
                  href="https://www.google.com/maps?q=13850+119A+St+NW,+Edmonton,+AB+T5X+5B7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-cyan-300 hover:text-cyan-200 underline"
                >
                  Get Directions
                </a>
              </div>
            </Parallax>

            <Parallax
              translateX={[30, 0]}
              opacity={[0, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ Parking</li>
                  <li>✅ Sunday School</li>
                </ul>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section id="sermon" className="relative py-16 bg-[#7b1e2b] text-white">
        <Parallax
          translateY={[20, -20]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-br from-rose-500/30 via-amber-300/10 to-transparent blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <Parallax
              translateX={[-40, 0]}
              opacity={[0, 1]}
              easing={[0.2, 0.8, 0.2, 1]}
            >
              <div>
                <h2 className="text-2xl font-semibold">Latest Sermon</h2>
                <p className="mt-2 text-white/80">
                  <span className="font-semibold text-white">Vision:</span> To
                  build a Christ-Centered Church. A place where people will meet
                  Jesus, be transformed by the Holy Spirit and equipped to do
                  the work of God.
                </p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://www.youtube.com/@bodyofchristchurchyeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-5 py-2 text-black hover:bg-gray-100 transition"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </Parallax>

            <Parallax
              scale={[0.88, 1.12]}
              opacity={[0.6, 1]}
              translateX={[40, 0]}
              easing={[0.22, 1, 0.36, 1]}
              className="relative"
            >
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-400/40 shadow-2xl">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                  <Image
                    src="/home-image.jpg"
                    alt="Sermon thumbnail"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="relative py-16 bg-black text-white">
        <Parallax
          translateY={[15, -15]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-tr from-amber-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Parallax
            translateY={[20, 0]}
            opacity={[0, 1]}
            easing={[0.22, 1, 0.36, 1]}
          >
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              <Link
                href="/event"
                className="text-sm text-cyan-300 underline hover:text-cyan-200"
              >
                View all
              </Link>
            </div>
          </Parallax>
          <EventsList />
        </div>
      </section>

      {/* Ministries Section */}
      <section
        id="ministries"
        className="relative py-16 bg-[#0b1220] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Ministries</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 auto-rows-fr">
            {ministries.map((m, idx) => (
              <Parallax
                key={m.title}
                translateX={idx % 2 === 0 ? [-25, 0] : [25, 0]}
                opacity={[0, 1]}
                easing={[0.22, 1, 0.36, 1]}
              >
                <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-auto pt-4 inline-block text-cyan-300 underline hover:text-cyan-200"
                  >
                    Learn more
                  </Link>
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section
        id="connect"
        className="relative py-20 bg-black text-white overflow-hidden"
      >
        <Parallax
          translateY={[25, -25]}
          opacity={[0.6, 1]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-br from-indigo-300/30 via-purple-300/20 to-rose-200/20 blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Connect With Us
            </h2>
            <p className="mt-3 text-base text-gray-300">
              We’d love to pray with you, celebrate your baptism, and help you
              take your next step into community.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Prayer Request",
                href: "/connect/prayer",
                emoji: "🙏",
              },
              {
                title: "Baptism",
                href: "/connect/baptism",
                emoji: "💧",
              },
              {
                title: "Become a Member",
                href: "/contact",
                emoji: "🤝",
              },
            ].map((item, idx) => (
              <Parallax
                key={item.title}
                translateY={[20, 0]}
                scale={idx === 1 ? [0.95, 1] : [0.98, 1]}
                opacity={[0, 1]}
                easing={[0.22, 1, 0.36, 1]}
              >
                <Link
                  href={item.href}
                  className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur transition transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl shadow-sm ring-1 ring-white/10">
                    {item.emoji}
                  </span>
                  <span className="mt-4 block text-lg font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm text-gray-400">
                    Tap to learn more
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/0 via-purple-400/0 to-amber-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  />
                </Link>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section id="give" className="relative py-16 bg-[#3b1d5a] text-white">
        <Parallax
          translateY={[-5, 5]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-amber-400/20 blur-2xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Parallax
            scale={[0.95, 1]}
            opacity={[0, 1]}
            easing={[0.22, 1, 0.36, 1]}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl">
              <h2 className="text-2xl font-semibold">Give</h2>
              <p className="mt-2 text-white/80">
                Your generosity fuels local outreach and global missions.
              </p>
              <div className="mt-6">
                <Link
                  href="/give"
                  className="rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 transition inline-block"
                >
                  Give Securely
                </Link>
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="relative py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Parallax
              translateX={[-30, 0]}
              opacity={[0, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div>
                <h2 className="text-2xl font-semibold">Meet our Pastor</h2>
                <p className="mt-3 text-gray-300">
                  Pastor Jean Paul Niyibizi is known for inspirational,
                  practical, Word-based teaching and a true shepherd’s heart.
                  His journey began as an evangelist in Sweden and has since
                  reached people across Europe and North America. He moved to
                  Alberta in 2014, married his wife Claire, and they are
                  raising three children. In August 2024, they founded Body of
                  Christ Church in Edmonton to reach the lost and bring hope
                  through the transforming power of the Gospel—one soul at a
                  time.
                </p>
                <Link
                  href="/about"
                  className="mt-4 inline-block text-sm text-cyan-300 underline hover:text-cyan-200"
                >
                  Read the full story
                </Link>
                <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="font-medium text-white">Ministry Focus</p>
                    <p className="text-gray-300">
                      Evangelism • Discipleship • Outreach
                    </p>
                  </div>
                </div>
              </div>
            </Parallax>

            <Parallax
              translateX={[30, 0]}
              scale={[0.92, 1]}
              opacity={[0, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-amber-400/20 blur-2xl"
                />
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-amber-400/50 shadow-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                    <Image
                      src="/jp.jpg"
                      alt="Pastor Jean Paul Niyibizi"
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-gray-300">
                  Pastor Jean Paul Niyibizi
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </main>
  );
}
