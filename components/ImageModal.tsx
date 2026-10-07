"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface ImageModalProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export default function ImageModal({
  src,
  alt,
  sizes,
  className = "",
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Expand ${alt}`}
        className="block w-full text-left"
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          sizes={sizes}
          className={className}
        />
      </button>

      {isOpen &&
        mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white hover:bg-white/20"
            >
              ✕
            </button>
            <div
              className="relative max-h-[90vh] max-w-[95vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={900}
                sizes="95vw"
                className="h-auto max-h-[90vh] w-auto max-w-[95vw] rounded-lg object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
