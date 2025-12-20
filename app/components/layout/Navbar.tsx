import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 ">
      <nav
        className="
          mx-auto max-w-6xl
          px-4 md:px-6
          h-14
          flex items-center justify-between
          backdrop-blur-md
          bg-[var(--color-background)]/01
          border-b border-black/1
        "
      >
        {/* Left */}
        <Link
          href="/"
          className="font-medium hover:text-[var(--color-header)] text-[var(--color-accent)] text-lg transition duration-900 ease-in-out"
        >
          Spencer Anderson
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-[var(--color-header)]">
          <Link
            href="/about"
            className="hover:opacity-70 transition hover:text-[var(--color-accent)] transition duration-500 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="hover:opacity-70 transition hover:text-[var(--color-accent)] transition duration-500 ease-in-out"
          >
            Experience
          </Link>
          <Link
            href="mailto:sanderson28801@gmail.com"
            className="hover:opacity-70 transition hover:text-[var(--color-accent)] transition duration-500 ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="/Spencer_Anderson_Software_Dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition duration-500 ease-in-out"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
