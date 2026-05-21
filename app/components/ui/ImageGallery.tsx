"use client";

import { useState } from "react";

// 1. Define the exact shape of your image objects
export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

// 2. Define the props the component expects to receive
interface ImageGalleryProps {
  images: ProjectImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // 3. Tell useState that activeImage can be a ProjectImage OR null
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* The Gallery Grid */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-1 w-full min-w-[300px] max-w-2xl border-2 border-gray-200 dark:border-gray-700 p-3 rounded-xl shadow-sm flex flex-col items-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            onClick={() => setActiveImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-[var(--color-text)] leading-relaxed">
              {img.caption}
            </p>
          </div>
        ))}
      </div>

      {/* The Lightbox Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            aria-label="Close Lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Expanded Image */}
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl"
          />

          {/* Lightbox Caption */}
          <p className="mt-6 text-white text-lg text-center max-w-3xl">
            {activeImage.caption}
          </p>
        </div>
      )}
    </>
  );
}
