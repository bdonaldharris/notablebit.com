import Image, { type StaticImageData } from "next/image";
import { Button } from "@/app/_components/ui";

type PageHeroProps = {
  image: StaticImageData | string;
  title: string;
  lede: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  objectPosition?: string;
  theme?: "dark" | "light";
  className?: string;
};

export function PageHero({
  className = "",
  image,
  lede,
  objectPosition,
  primary,
  secondary,
  theme = "dark",
  title,
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${theme} ${className}`.trim()} aria-labelledby="page-title">
      <Image
        alt=""
        className="page-hero-image"
        fill
        preload
        sizes="100vw"
        src={image}
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <h1 className="display" id="page-title">
            {title}
          </h1>
          <p className="lede">{lede}</p>
          <div className="button-row">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
