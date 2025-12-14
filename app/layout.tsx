import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

const siteUrl = "http://localhost:3000"; // <-- cambia quando pubblichi (es. https://robertofarenga.com)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roberto Farenga",
    template: "%s | Roberto Farenga",
  },
  description: "CV • Projects • Research. Personal website.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Roberto Farenga — CV • Projects • Research",
    description: "Personal website with CV, selected projects and research outputs.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Roberto Farenga — CV • Projects • Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Farenga — CV • Projects • Research",
    description: "Personal website with CV, selected projects and research outputs.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen px-6 py-10">
          <Header />
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
