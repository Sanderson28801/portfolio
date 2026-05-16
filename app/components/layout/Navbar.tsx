"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="
          mx-auto max-w-6xl
          px-4 md:px-6
          h-14
          flex items-center justify-between
          backdrop-blur-md
          bg-[var(--color-background)]/01
          border-b border-black/10
        "
      >
        {/* Left */}
        <Link
          href="/"
          onClick={closeMenu}
          className="px-4 py-4 font-medium hover:text-[var(--color-header)] text-[var(--color-accent)] text-lg transition duration-900 ease-in-out"
        >
          Spencer Anderson
        </Link>

        {/* Right - Desktop (Hidden on mobile) */}
        {/* Removed gap-6 so the padding on the links handles the spacing natively */}
        <div className="hidden md:flex items-center text-sm text-[var(--color-header)]">
          <Link
            href="/about"
            className="px-4 py-4 hover:opacity-70 transition hover:text-[var(--color-accent)] duration-500 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="px-4 py-4 hover:opacity-70 transition hover:text-[var(--color-accent)] duration-500 ease-in-out"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="px-4 py-4 hover:opacity-70 transition hover:text-[var(--color-accent)] duration-500 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="/Spencer_Anderson_Software_Dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-4 py-4 hover:text-[var(--color-accent)] transition duration-500 ease-in-out"
          >
            Resume
          </Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden flex items-center text-[var(--color-header)] hover:text-[var(--color-accent)] transition duration-300 p-2 -mr-2"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {/* SVG for Hamburger / Close Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-[var(--color-background)] shadow-lg backdrop-blur-md">
          <div className="flex flex-col text-sm text-[var(--color-header)]">
            <Link
              href="/about"
              onClick={closeMenu}
              className="w-full block py-5 text-center border-b border-black/5 hover:bg-black/5 dark:hover:bg-white/5 transition hover:text-[var(--color-accent)] duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href="/experience"
              onClick={closeMenu}
              className="w-full block py-5 text-center border-b border-black/5 hover:bg-black/5 dark:hover:bg-white/5 transition hover:text-[var(--color-accent)] duration-300 ease-in-out"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="w-full block py-5 text-center border-b border-black/5 hover:bg-black/5 dark:hover:bg-white/5 transition hover:text-[var(--color-accent)] duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/Spencer_Anderson_Software_Dev.pdf"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-5 text-center border-b border-black/5 hover:bg-black/5 dark:hover:bg-white/5 transition hover:text-[var(--color-accent)] duration-300 ease-in-out"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
