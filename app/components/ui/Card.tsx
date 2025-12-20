export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        rounded-xl
        border border-black/5
        bg-[var(--color-secondary-background)]
        p-6
        transition
        hover:-translate-y-1
        hover:border-black/10
      "
    >
      {children}
    </div>
  );
}
