import Image from "next/image";

type ShowcaseCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  accentColor?: string;
};

export default function ShowcaseCard({
  title,
  description,
  image,
  tags,
}: ShowcaseCardProps) {
  return (
    <div
      className="
    group
    rounded-xl
    border
    border-gray-600
    
    transition-all
    duration-300
    hover:border-[var(--color-accent)]
    flex
    flex-col
    overflow-hidden
    justify-between
  "
    >
      {/* Image */}
      <div
        className="
    relative
    aspect-[16/9]
    bg-[var(--color-secondary-background)]
    flex
    flex-1
    items-center
    justify-center
  "
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="
      object-contain
      max-w-[85%]
      max-h-[85%]
      transition-transform
      duration-500
      ease-out
      group-hover:scale-105
    "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-medium text-[var(--color-header)]">{title}</h3>

        <p className="mt-2 text-sm text-[var(--color-text)] leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="
                text-xs
                font-medium
                px-2.5 py-1
                rounded-full
                bg-black/5
                text-[var(--color-text)]
                border border-[var(--color-accent)]
                
              "
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
