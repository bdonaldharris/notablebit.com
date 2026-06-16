import type { Metadata } from "next";
import { Header, Footer } from "@/app/_components/layout";
import { site } from "@/app/_content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NotableBIT | Founder-Led Technology Studio",
    template: "%s | NotableBIT",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: "NotableBIT | Founder-Led Technology Studio",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotableBIT | Founder-Led Technology Studio",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <div id="main-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
