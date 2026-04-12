import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Serif “finance” per TITOLI
const titleSerif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: {
    default: "Roberto Farenga",
    template: "%s | Roberto Farenga",
  },
  description: "CV, selected projects and research outputs by Roberto Farenga.",
  openGraph: {
    title: "Roberto Farenga",
    description: "CV, selected projects and research outputs.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Roberto Farenga",
    description: "CV, selected projects and research outputs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${titleSerif.variable} bg-white text-slate-900`}>
        <div className="min-h-screen flex flex-col px-6 py-10">
          <Header />
          <div className="mt-10 flex-1">{children}</div>
          <footer className="mt-24 border-t border-slate-200 pt-6 text-[11px] text-slate-500 w-full max-w-6xl mx-auto">
            © {new Date().getFullYear()} Roberto Farenga
          </footer>
        </div>
      </body>
    </html>
  );
}
