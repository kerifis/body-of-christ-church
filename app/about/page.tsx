"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <Parallax
          translateY={[-20, 20]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-amber-400/10 blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <Parallax
              translateX={[-12, 0]}
              opacity={[1, 1]}
              easing={[0.22, 1, 0.36, 1]}
            >
              <div className="lg:max-w-xl">
                <p className="text-sm tracking-widest text-gray-300 uppercase">
                  About Us
                </p>
                <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Body of Christ Church
                  </span>
                </h1>
                <p className="mt-4 text-lg text-gray-300 sm:mt-6">
                  Our desire is to serve God in holiness and righteousness.
                  Empowered by His boundless love, we strive to live according
                  to His Word, deepen our faith, and shine the light of Christ
                  through all we do. We long to serve the Lord and behold His
                  glory. Our goal is to give ourselves fully to God and serve Him
                  with truth and love.
                </p>
                <div className="mt-8 flex gap-4">
                  <Link
                    href="#pastor"
                    className="rounded-full bg-white px-5 py-2 text-black hover:bg-gray-100 transition"
                  >
                    Meet the Pastor
                  </Link>
                  <Link
                    href="#beliefs"
                    className="rounded-full border border-white/20 px-5 py-2 hover:bg-white/10 transition"
                  >
                    Our Beliefs
                  </Link>
                </div>
              </div>
            </Parallax>

            <Parallax
              translateX={[12, 0]}
              scale={[0.98, 1]}
              opacity={[1, 1]}
              easing={[0.22, 1, 0.36, 1]}
              className="relative"
            >
              <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl group">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-amber-400/20 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-400/40 shadow-2xl">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                    <Image
                      src="/home-image.jpg"
                      alt="Worship at Body of Christ Church"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="relative py-16 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">WHO WE ARE</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Parallax translateX={[-10, 0]} opacity={[1, 1]}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">About Us</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Our desire is to serve God in holiness and righteousness.
                  Empowered by His boundless love, we strive to live according
                  to His Word, deepen our faith, and shine the light of Christ
                  through all we do. We long to serve the Lord and behold His
                  glory. Our goal is to give ourselves fully to God and serve Him
                  with truth and love.
                </p>
              </div>
            </Parallax>

            <Parallax translateX={[10, 0]} opacity={[1, 1]}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">Our Beliefs</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We believe in the one true God—Father, Son, and Holy Spirit—and
                  we seek to love Him with all our heart, soul, and mind,
                  walking in obedience to His Word.
                </p>
                <Link
                  href="#beliefs"
                  className="mt-4 inline-flex items-center text-sm text-white/90 hover:text-white underline underline-offset-4"
                >
                  Read our Statement of Faith
                </Link>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Meet our Pastor Section */}
      <section id="pastor" className="relative py-16 bg-white text-gray-900">
        <Parallax
          translateY={[20, -20]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-br from-rose-300/30 via-amber-200/20 to-transparent blur-3xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            <Parallax translateX={[-4, 0]} opacity={[1, 1]}>
              <div className="mx-auto w-full max-w-2xl text-center lg:max-w-none lg:text-left">
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    Meet our Pastor
                  </h2>
                  <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-gray-800">
                    Leadership
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      Pastor Jean Paul Niyibizi is known for his inspirational,
                      practical, Word-based teaching and having a real
                      Shepherd’s heart.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-gray-800">
                        Word-based teaching
                      </span>
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-gray-800">
                        Evangelism
                      </span>
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-gray-800">
                        Discipleship
                      </span>
                      <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-gray-800">
                        Outreach
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                      <p>
                        His journey began as an evangelist while living in
                        Sweden. Since then he has faithfully shared the Gospel
                        across Europe and North America.
                      </p>
                      <p>
                        Pastor Jean Paul relocated to Alberta, Canada in 2014
                        where he got married to his wife Claire and they are
                        raising their three children. After relocating to
                        Edmonton, he became actively involved in a local church,
                        where he faithfully served in leadership for over ten
                        years. During this time, he oversaw evangelism efforts
                        and served as an assistant pastor, contributing
                        significantly to the growth and strengthening of the
                        ministry.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-amber-400/20 blur-2xl"
                      />
                      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-amber-400/50 shadow-2xl">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white">
                          <Image
                            src="/e.jpg"
                            alt="Pastor Jean Paul Niyibizi"
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover object-center"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                          />
                        </div>
                      </div>
                      <p className="mt-4 text-center text-sm font-medium text-gray-800 lg:text-left">
                        Pastor Jean Paul Niyibizi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                      <p>
                        In August 2024, Pastor Jean Paul and Claire answered
                        God&apos;s call to reach the lost in the city of Edmonton
                        and they founded Body of Christ Church.
                      </p>
                      <p>
                        There is hope for a bright future through the
                        transforming power of the Gospel of Jesus Christ. He can
                        heal this City, one soul at a time.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                      <div className="rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm">
                        <p className="font-medium text-gray-900">
                          Ministry Focus
                        </p>
                        <p className="mt-1 text-gray-700">
                          Evangelism • Discipleship • Outreach
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
                      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-amber-400/30 shadow-xl">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white">
                          <Image
                            src="/all.jpg"
                            alt="Pastor Jean Paul and Claire"
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover object-[50%_30%]"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent"
                          />
                        </div>
                      </div>
                      <p className="mt-4 text-center text-sm font-medium text-gray-800 lg:text-left">
                        Pastor Jean Paul &amp; Claire Niyibizi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">
                    Join us this Sunday
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Sundays{" "}
                    <span className="font-semibold text-gray-900">
                      4:00 PM – 6:00 PM
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-gray-700">
                    Pastor Jean and Claire would love to welcome you and your
                    family — we would love for you to find a family at Body of
                    Christ Church.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                      Plan your visit
                    </Link>
                    <Link
                      href="#beliefs"
                      className="inline-flex items-center justify-center rounded-full border border-black/20 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-black/5"
                    >
                      Our beliefs
                    </Link>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section id="beliefs" className="relative py-16 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Statement of Faith</h2>
          <ol className="mt-6 space-y-3 text-sm text-gray-300 list-decimal pl-6">
            <li>
              <span className="text-white font-medium">God:</span> God is the
              Almighty Creator and Sovereign Lord of all creation. He is eternal
              and has revealed Himself as one God in three persons: Father,
              Son, and Holy Spirit. We are called to love God with all our
              heart, soul and mind, to walk in obedience to His Word and to
              delight in His presence. (Genesis 1:1; Matthew 22:37; 1 John 2:5)
            </li>
            <li>
              <span className="text-white font-medium">Jesus Christ:</span>{" "}
              Jesus Christ is the Son of God—fully God and fully human. Born of
              a virgin, He lived a perfect, sinless life and willingly offered
              Himself as the ultimate sacrifice for the sins of the world. On
              the third day, He rose from the dead, defeating sin and death. He
              is the only way to the Father, and we are called to reflect Jesus
              in all we do. We eagerly await His glorious return when He will
              come to take His Bride, the Church. (John 1:29; John 14:3, 6)
            </li>
            <li>
              <span className="text-white font-medium">Holy Spirit:</span> The
              Holy Spirit is a divine person, fully God. He convicts hearts and
              draws people to Jesus Christ. He dwells within every believer,
              empowers us to live godly lives, opens our understanding of
              God’s Word, and leads us in paths of righteousness. He equips the
              Body of Christ with spiritual gifts for effective ministry and
              service. As believers, we earnestly seek to walk daily under His
              guidance and surrender to His transforming power. (John 16:7–13;
              John 14:16–17; Acts 1:8; Ephesians 1:13; Ephesians 5:18; Galatians
              5:25)
            </li>
            <li>
              <span className="text-white font-medium">Bible:</span> The Bible
              is God’s Word. We believe in the truth, power and authority of the
              Word of God. Inspired by God, it has the ability to change a
              person’s life and beliefs. At Body of Christ Church, we will love,
              teach, practice the Word of God with the revelation of the Holy
              Spirit. (2 Timothy 3:16; Psalm 119:160)
            </li>
            <li>
              <span className="text-white font-medium">Salvation:</span>{" "}
              Salvation is a gift of God’s grace, received by faith in Jesus
              Christ. It is the greatest gift that Jesus freely offers to all
              who will receive Him. Salvation cannot be earned by our works; it
              is received by faith in Jesus, who gave His life as a ransom for
              many. Through faith, God extends His forgiveness and declares us
              righteous. At Body of Christ Church, we pray and earnestly desire
              that every person will come to know Jesus Christ as their
              personal Savior. (Matthew 20:28; Ephesians 2:8–9; John 1:12; Titus
              3:5; Romans 5:1)
            </li>
            <li>
              <span className="text-white font-medium">Eternity:</span> God
              created mankind to exist eternally and gave us free will to choose:
              either to be united with God in eternal life or to be eternally
              separated from God in Hell. Both Heaven and Hell are real and
              eternal. It is God’s desire that we would choose life with Him and
              spend eternity in His presence. (Ecclesiastes 3:11; John 3:16;
              Romans 6:23; Revelation 20:15)
            </li>
            <li>
              <span className="text-white font-medium">
                Baptism and Holy Communion:
              </span>{" "}
              Baptism in water, by full immersion, is a direct commandment of
              our Lord. It is intended for all who believe. It serves as a
              public testimony of the believer’s commitment to Christ and
              symbolizes the believer’s death to sin and new life in Him. The
              Holy Communion represents our union and identification with Jesus
              Christ in His death, burial, and resurrection. (Matthew 28:19;
              Matthew 26:26–29; 1 Corinthians 11:23–32)
            </li>
          </ol>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Our Purpose</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-300 sm:grid-cols-3">
              <li>Evangelize</li>
              <li>Equip</li>
              <li>Establish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Plan Your Visit CTA */}
      <section className="relative py-20 bg-[#3b1d5a] text-white">
        <Parallax
          translateY={[-10, 10]}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-amber-400/20 blur-2xl" />
        </Parallax>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Parallax scale={[0.99, 1]} opacity={[1, 1]}>
            <h2 className="text-3xl font-semibold tracking-tight">
              Plan Your Visit
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              We can’t wait to welcome you this Sunday. Find parking info, kids
              check-in, and what to expect.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 transition inline-block"
              >
                Get Directions
              </Link>
            </div>
          </Parallax>
        </div>
      </section>
    </main>
  );
}
