export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" bg-[var(--color-footer)] flex m-1 rounded-lg pt-1 mt-auto">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-4 text-sm text-[var(--color-header)]">
        &copy; {year} Spencer Anderson. All rights reserved.
      </div>
    </footer>
  );
}
