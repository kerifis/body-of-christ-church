import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Body of Christ Church Edmonton",
  description: "Administration area",
};

export default function AdminPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 text-white bg-black">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-md">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <p className="mt-2 text-sm text-white/60">
          This site is now static. The admin sign-in has been retired. Content
          such as events is managed by editing the files in the repository.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
