"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <Toaster position="top-right" closeButton className="z-[10000]" />
      {children}
    </ParallaxProvider>
  );
}
