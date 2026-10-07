"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ShinyText from "./ShinyText";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // If inside /admin, the website didn't show the standard church navbar
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header className="pb-6 lg:pb-0 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10 bg-black">
                <Image
                  src="/logo.jpg"
                  alt="Body of Christ Church logo"
                  fill
                  priority
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <p className="text-white font-bold text-xl sm:text-2xl">
                Body of Christ Church
              </p>
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              href="/"
              className="text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
            >
              About Us
            </Link>
            <Link
              href="/event"
              className="text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
            >
              Contact Us
            </Link>

            {/* Connect dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("connect")}
                aria-expanded={openDropdown === "connect"}
                className="inline-flex items-center gap-1 text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
              >
                Connect With Us
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === "connect" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {openDropdown === "connect" && (
                <div className="absolute left-0 z-50 mt-2 w-64 rounded-md border border-gray-700 bg-black/95 shadow-lg backdrop-blur">
                  <div className="py-2">
                    <Link
                      href="/connect/prayer"
                      className="block px-4 py-2 text-sm text-white transition-colors hover:text-blue-400"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Prayer Request
                    </Link>
                    <Link
                      href="/connect/baptism"
                      className="block px-4 py-2 text-sm text-white transition-colors hover:text-blue-400"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Baptism
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm text-white transition-colors hover:text-blue-400"
                      onClick={() => setOpenDropdown(null)}
                    >
                      Become a Member
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop GIVE Button */}
          <Link
            href="/give"
            className="group items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-black transition-all duration-200 border-transparent rounded-md lg:inline-flex"
            role="button"
          >
            <ShinyText
              text="GIVE"
              speed={3}
              className="text-3xl pb-0.5 border-b border-transparent group-hover:border-amber-300"
            />
          </Link>
        </nav>

        {/* Mobile Navigation Drawer */}
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } lg:hidden pt-4 pb-6 bg-black border border-gray-700 rounded-md shadow-md`}
        >
          <div className="flow-root">
            <div className="flex flex-col items-start px-6 -my-2 space-y-1">
              <Link
                href="/"
                className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/event"
                className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-400 focus:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <div className="w-full">
                <button
                  type="button"
                  onClick={() => toggleDropdown("mobile-connect")}
                  aria-expanded={openDropdown === "mobile-connect"}
                  className="inline-flex w-full items-center justify-between py-2 text-base font-medium text-white transition-all hover:text-blue-400 focus:text-blue-400"
                >
                  <span>Connect With Us</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "mobile-connect" ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>

                {openDropdown === "mobile-connect" && (
                  <div className="mt-1 space-y-1 pl-4">
                    <Link
                      href="/connect/prayer"
                      className="block py-1 text-sm text-white hover:text-blue-400"
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Prayer Request
                    </Link>
                    <Link
                      href="/connect/baptism"
                      className="block py-1 text-sm text-white hover:text-blue-400"
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Baptism
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-1 text-sm text-white hover:text-blue-400"
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Become a Member
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 mt-6">
            <Link
              href="/give"
              className="group flex items-center justify-start py-2 text-base font-semibold text-white transition-all duration-200"
              role="button"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShinyText
                text="GIVE"
                speed={3}
                className="text-3xl pb-0.5 border-b border-transparent group-hover:border-amber-300"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
