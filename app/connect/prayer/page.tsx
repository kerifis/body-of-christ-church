"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { sendEmailForm } from "@/lib/email";

export default function PrayerRequestPage() {
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim()) return;
    if (!anonymous && (!name.trim() || !email.trim() || !phone.trim())) return;

    try {
      setSubmitting(true);
      await sendEmailForm("Prayer Request", {
        Name: anonymous ? "Anonymous" : name.trim(),
        Email: anonymous ? email.trim() : email.trim(),
        Phone: anonymous ? phone.trim() : phone.trim(),
        Request: subject.trim(),
      });

      toast.success("Prayer request sent. Thank you.");
      setSubject("");
      setName("");
      setEmail("");
      setPhone("");
      setAnonymous(false);
    } catch (err: any) {
      toast.error("Failed to send prayer request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white">
      {/* Top Header & Form Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-amber-400/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1 lg:max-w-md">
              <nav className="text-sm text-gray-400">
                <Link className="hover:text-white" href="/">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-300">Prayer Request</span>
              </nav>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Prayer Request
              </h1>
              <p className="mt-3 text-gray-300">
                We believe God hears us. Share how we can pray with you—our team
                will lift your request this week. You can keep it private or
                allow the wider team to pray.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <p>
                  Service prayer is available every Sunday after the gathering
                  at the front.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <section className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur">
                <header className="mb-4">
                  <h2 className="text-2xl font-semibold">Request Prayer</h2>
                  <p className="mt-1 text-sm text-white/70">
                    Share your request. We will pray with you.
                  </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-3">
                    <label
                      htmlFor="anonymous"
                      className="text-sm text-white/90 cursor-pointer"
                    >
                      Submit anonymously
                    </label>
                    <input
                      id="anonymous"
                      type="checkbox"
                      className="h-4 w-4 accent-cyan-400 cursor-pointer"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm text-white/80"
                      >
                        Name{" "}
                        {anonymous ? (
                          <span className="text-white/50">(optional)</span>
                        ) : (
                          <span className="text-red-400">*</span>
                        )}
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={!anonymous}
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm text-white/80"
                      >
                        Email{" "}
                        {anonymous ? (
                          <span className="text-white/50">(optional)</span>
                        ) : (
                          <span className="text-red-400">*</span>
                        )}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={!anonymous}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm text-white/80"
                      >
                        Phone{" "}
                        {anonymous ? (
                          <span className="text-white/50">(optional)</span>
                        ) : (
                          <span className="text-red-400">*</span>
                        )}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required={!anonymous}
                        placeholder="(555) 000-0000"
                        className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block text-sm text-white/80"
                    >
                      Prayer request <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      rows={6}
                      placeholder="How can we pray with you?"
                      className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    />
                    <p className="mt-1 text-xs text-white/50">
                      We respect your privacy. Your request will be shared only
                      with our prayer team.
                    </p>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-black font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70 transition"
                    >
                      {submitting ? "Sending…" : "Send request"}
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Meet With Someone / Other Support Cards */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Meet with Someone</h3>
              <p className="mt-2 text-sm text-gray-300">
                Request a short call or meeting with a pastor or care leader.
              </p>
              <Link
                className="mt-3 inline-block text-cyan-300 underline hover:text-cyan-200"
                href="/contact"
              >
                Book a time
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Baptism</h3>
              <p className="mt-2 text-sm text-gray-300">
                Interested in being baptized? We’d love to talk.
              </p>
              <Link
                className="mt-3 inline-block text-cyan-300 underline hover:text-cyan-200"
                href="/connect/baptism"
              >
                Learn more
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Care &amp; Support</h3>
              <p className="mt-2 text-sm text-gray-300">
                Let us know how we can help—meals, visits, or practical support.
              </p>
              <Link
                className="mt-3 inline-block text-cyan-300 underline hover:text-cyan-200"
                href="/contact"
              >
                Get support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
