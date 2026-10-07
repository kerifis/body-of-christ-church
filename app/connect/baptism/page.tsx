"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { sendEmailForm } from "@/lib/email";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  acceptedJesus: string;
  acceptedDate: string;
  attendingSince: string;
}

export default function BaptismPage() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    acceptedJesus: "",
    acceptedDate: "",
    attendingSince: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    acceptedJesus: false,
    acceptedDate: false,
    attendingSince: false,
  });

  const errors = useMemo(() => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      errs.lastName = "Last name is required.";
    }

    const cleanPhone = formData.phone.replace(/[\s()-]/g, "");
    const phoneValid = /^\+?\d{7,15}$/.test(cleanPhone);
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!phoneValid) {
      errs.phone = "Enter a valid phone number.";
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!emailValid) {
      errs.email = "Enter a valid email address.";
    }

    if (!formData.acceptedJesus) {
      errs.acceptedJesus = "Please choose Yes or No.";
    }
    if (formData.acceptedJesus === "yes" && !formData.acceptedDate) {
      errs.acceptedDate = "Please provide an approximate date.";
    }
    if (!formData.attendingSince) {
      errs.attendingSince = "Please provide an approximate date.";
    }

    return errs;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (field: keyof FormState, val: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
      ...(field === "acceptedJesus" && val === "no" ? { acceptedDate: "" } : null),
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const showError = (field: string) => touched[field] && errors[field];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      acceptedJesus: true,
      acceptedDate: true,
      attendingSince: true,
    });

    if (!isValid) return;

    try {
      setSubmitting(true);
      await sendEmailForm("Baptism Registration", {
        "First Name": formData.firstName.trim(),
        "Last Name": formData.lastName.trim(),
        Phone: formData.phone.trim(),
        Email: formData.email.trim(),
        "Accepted Jesus": formData.acceptedJesus,
        "Accepted Date":
          formData.acceptedJesus === "yes" ? formData.acceptedDate : "N/A",
        "Attending Since": formData.attendingSince,
      });

      toast.success("Submitted! We will contact you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        acceptedJesus: "",
        acceptedDate: "",
        attendingSince: "",
      });
      setTouched({
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        acceptedJesus: false,
        acceptedDate: false,
        attendingSince: false,
      });
    } catch (err: any) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20";
  const labelClass = "text-sm text-gray-200";
  const errorClass = "mt-1 text-xs text-rose-300";

  return (
    <main className="bg-black text-white">
      {/* Top Header & Registration Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-amber-400/10 blur-3xl"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="lg:col-span-1 lg:max-w-md">
              <nav className="text-sm text-gray-400">
                <Link className="hover:text-white" href="/">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-300">Baptism</span>
              </nav>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Baptism
              </h1>
              <p className="mt-3 text-gray-300">
                Baptism is a beautiful step of obedience — a public declaration
                of faith in Jesus Christ. At Elim Family Church, we celebrate
                baptisms as a testimony of God’s transforming grace.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
                <p className="text-sm text-gray-300">
                  Ready to take this step? Fill out the form below and we’ll
                  follow up with the next baptism date and details.
                </p>

                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="w-full">
                    <header className="space-y-2">
                      <h2 className="text-xl font-semibold tracking-tight text-white">
                        WATER BAPTISM
                      </h2>
                      <p className="text-sm text-gray-300">
                        Please fill out the following form if you are interested
                        in water baptism at Body of Christ Church.
                      </p>
                    </header>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleChange("firstName", e.target.value)
                          }
                          onBlur={() => handleBlur("firstName")}
                          className={inputClass}
                          placeholder="e.g., Jean"
                          autoComplete="given-name"
                        />
                        {showError("firstName") && (
                          <p className={errorClass}>{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleChange("lastName", e.target.value)
                          }
                          onBlur={() => handleBlur("lastName")}
                          className={inputClass}
                          placeholder="e.g., Niyibizi"
                          autoComplete="family-name"
                        />
                        {showError("lastName") && (
                          <p className={errorClass}>{errors.lastName}</p>
                        )}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          className={inputClass}
                          placeholder="e.g., +1 780 555 0123"
                          autoComplete="tel"
                        />
                        {showError("phone") && (
                          <p className={errorClass}>{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={inputClass}
                          placeholder="e.g., you@example.com"
                          autoComplete="email"
                        />
                        {showError("email") && (
                          <p className={errorClass}>{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-medium text-white">
                        Have you accepted Jesus Christ as your Lord and Saviour?
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-300">
                        If you declare with your mouth, “Jesus is Lord,” and
                        believe in your heart that God raised him from the dead,
                        you will be saved. For it is with your heart that you
                        believe and are justified, and it is with your mouth that
                        you profess your faith and are saved. Romans 10:9–10
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <label className="inline-flex items-center gap-2 text-sm text-gray-200 cursor-pointer">
                          <input
                            type="radio"
                            name="acceptedJesus"
                            value="yes"
                            checked={formData.acceptedJesus === "yes"}
                            onChange={() => handleChange("acceptedJesus", "yes")}
                            onBlur={() => handleBlur("acceptedJesus")}
                            className="h-4 w-4 accent-cyan-400 cursor-pointer"
                          />
                          Yes
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-gray-200 cursor-pointer">
                          <input
                            type="radio"
                            name="acceptedJesus"
                            value="no"
                            checked={formData.acceptedJesus === "no"}
                            onChange={() => handleChange("acceptedJesus", "no")}
                            onBlur={() => handleBlur("acceptedJesus")}
                            className="h-4 w-4 accent-cyan-400 cursor-pointer"
                          />
                          No
                        </label>
                      </div>
                      {showError("acceptedJesus") && (
                        <p className={errorClass}>{errors.acceptedJesus}</p>
                      )}

                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass} htmlFor="acceptedDate">
                            If yes, approximate date (YYYY-MM-DD)
                          </label>
                          <input
                            id="acceptedDate"
                            name="acceptedDate"
                            type="date"
                            value={formData.acceptedDate}
                            onChange={(e) =>
                              handleChange("acceptedDate", e.target.value)
                            }
                            onBlur={() => handleBlur("acceptedDate")}
                            className={`${inputClass} ${
                              formData.acceptedJesus !== "yes"
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={formData.acceptedJesus !== "yes"}
                          />
                          {showError("acceptedDate") && (
                            <p className={errorClass}>{errors.acceptedDate}</p>
                          )}
                        </div>

                        <div>
                          <label
                            className={labelClass}
                            htmlFor="attendingSince"
                          >
                            How long attending BOC Church? (YYYY-MM-DD)
                          </label>
                          <input
                            id="attendingSince"
                            name="attendingSince"
                            type="date"
                            value={formData.attendingSince}
                            onChange={(e) =>
                              handleChange("attendingSince", e.target.value)
                            }
                            onBlur={() => handleBlur("attendingSince")}
                            className={inputClass}
                          />
                          {showError("attendingSince") && (
                            <p className={errorClass}>
                              {errors.attendingSince}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-gray-400">
                        By submitting this form, you agree that Body of Christ
                        Church may contact you about baptism.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? "Submitting…" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-amber-400/40 shadow-2xl">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
                  <Image
                    src="/home-image.jpg"
                    alt="Baptism celebration"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Baptism Section */}
      <section className="relative py-12 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Why Baptism?</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>
              Baptism is a powerful symbol of dying to our old life and being
              raised to new life in Christ.
            </p>
            <p>
              It’s an outward expression of an inward faith — a way to tell the
              world that you belong to Jesus.
            </p>
            <p>
              We follow Christ’s example and command to be baptized in the name
              of the Father, Son, and Holy Spirit.
            </p>
          </div>
        </div>
      </section>

      {/* The Baptism Process Section */}
      <section id="signup" className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">The Baptism Process</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">1. Learn</h3>
              <p className="mt-2 text-sm text-gray-300">
                Attend a short baptism class to understand the meaning of
                baptism and ask questions.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">2. Share</h3>
              <p className="mt-2 text-sm text-gray-300">
                Meet with a pastor to share your story of faith in Jesus
                Christ.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">3. Celebrate</h3>
              <p className="mt-2 text-sm text-gray-300">
                Be baptized during a Sunday service and celebrate with your
                church family!
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black font-semibold hover:bg-gray-100 transition"
            >
              Sign Up Today
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="relative py-12 bg-[#0b1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">
                Do I need to be a member to be baptized?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                No, but we encourage you to get connected to our church family.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">
                What if I was baptized as a baby?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                We celebrate that! We also practice believer’s baptism for those
                choosing to follow Jesus personally.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold text-white">
                Can my family participate?
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Absolutely! We encourage friends and family to celebrate with
                you and support you in faith.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
