import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
const EXTERNAL_HTTP_PATTERN = /^https?:\/\//i;

function isExternalHttpHref(href: string): boolean {
  return EXTERNAL_HTTP_PATTERN.test(href);
}

function ensureSecureExternalRel(rel?: string): string {
  const tokens = new Set((rel ?? "").split(/\s+/).filter(Boolean));
  tokens.add("noopener");
  tokens.add("noreferrer");
  return Array.from(tokens).join(" ");
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, className = "", href, variant = "primary", ...props }: ButtonProps) {
  const isExternal = isExternalHttpHref(href);
  return (
    <Link
      className={`button button-${variant} ${className}`.trim()}
      href={href}
      {...props}
      rel={isExternal ? ensureSecureExternalRel(props.rel) : props.rel}
      target={isExternal ? "_blank" : props.target}
    >
      {children}
    </Link>
  );
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
              <Link className="text-link" href={secondaryHref}>
                {secondaryLabel} <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
