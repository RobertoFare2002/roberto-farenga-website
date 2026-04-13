import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${titleSerif.variable}`}>
        <div className="min-h-screen flex flex-col bg-[#0a0f1c]">
          {/* Header — own padding */}
          <div className="px-5 sm:px-10 py-4 sm:py-5">
            <Header />
          </div>

          {/* Page content — no outer padding (pages handle their own) */}
          <div className="flex-1">{children}</div>

          {/* Footer */}
          <footer className="px-5 sm:px-10 py-8 mt-16 border-t border-white/[0.07] text-[11px] text-slate-600">
            © {new Date().getFullYear()} Roberto Farenga
          </footer>
        </div>
      </body>
    </html>
  );
}
