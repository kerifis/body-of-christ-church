"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { sendEmailForm } from "@/lib/email";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const form = formRef.current;
      if (!form) return;
      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const message = String(formData.get("message") ?? "");

      await sendEmailForm("Contact Message", {
        Name: name,
        Email: email,
        Message: message,
      });

      toast.success("Message sent. Thank you!", {
        style: { backgroundColor: "green", color: "white" },
      });
      form.reset();
    } catch (err: any) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
      formRef.current?.reset();
    }
  };

  return (
    <main className="bg-black text-white">
      {/* Top Header / Contact Info Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-amber-400/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="lg:col-span-1 lg:max-w-md">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-3 text-gray-300">
                We’d love to connect with you. Whether you’re new, need prayer,
                or have questions about Body of christ Church, our team is here
                for you.
              </p>
              <div className="mt-6 space-y-3 text-gray-300 text-sm">
                <p>
                  <strong className="text-white">Address:</strong> 13850 119A
                  St NW, Edmonton, AB T5X 5B7
                </p>
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:info@bocchurch.ca"
                    className="text-cyan-300 underline"
                  >
                    info@bocchurch.ca
                  </a>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-400/40 shadow-2xl">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                  <Image
                    src="/home-image.jpg"
                    alt="Body of Christ Church location"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Form Section */}
      <section className="relative py-12 bg-[#0b1220]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Send Us a Message</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-500 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-500 text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-cyan-500 text-white"
                placeholder="How can we help you?"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black font-semibold hover:bg-gray-100 disabled:opacity-70 transition"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Other Ways to Connect</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Visit Us</h3>
              <p className="mt-2 text-sm text-gray-300">
                Join us on Sundays at 04:00 PM for worship and fellowship.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Prayer</h3>
              <p className="mt-2 text-sm text-gray-300">
                Share a{" "}
                <Link
                  className="text-cyan-300 underline"
                  href="/connect/prayer"
                >
                  prayer request
                </Link>{" "}
                with our team—we’d love to pray with you.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">Give</h3>
              <p className="mt-2 text-sm text-gray-300">
                Support the mission of Body of Christ Church by{" "}
                <Link className="text-cyan-300 underline" href="/give">
                  giving
                </Link>{" "}
                securely online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
