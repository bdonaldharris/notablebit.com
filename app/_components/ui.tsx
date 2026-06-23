import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, className = "", href, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link className={`button button-${variant} ${className}`.trim()} href={href} {...props}>
      {children}
    </Link>
  );
}

type BadgeProps = {
  children: ReactNode;
  tone?: "amber" | "blue";
};

export function Badge({ children, tone = "amber" }: BadgeProps) {
  return <span className={`badge ${tone === "blue" ? "badge-blue" : ""}`.trim()}>{children}</span>;
}

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className = "", interactive = false }: CardProps) {
  return <div className={`card ${interactive ? "card-interactive" : ""} ${className}`.trim()}>{children}</div>;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-xl">{title}</h2>
      {description ? <p className="body-copy">{description}</p> : null}
    </div>
  );
}

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  label?: string;
};

export function LinkCard({ description, href, label, title }: LinkCardProps) {
  return (
    <Link className="card card-interactive link-card" href={href}>
      <div className="card-stack">
        {label ? <Badge tone="blue">{label}</Badge> : null}
        <h3 className="heading-md">{title}</h3>
        <p className="body-copy">{description}</p>
      </div>
    </Link>
  );
}

type CtaSectionProps = {
  className?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaSection({
  className = "",
  description,
  eyebrow,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  title,
}: CtaSectionProps) {
  return (
    <section className={className || "section-tight"} aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-panel">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="heading-lg" id="cta-title">
              {title}
            </h2>
            <p className="lede">{description}</p>
          </div>
          <div className="button-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
