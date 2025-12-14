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
  title: "Roberto Farenga",
  description: "CV • Projects • Research",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${titleSerif.variable}`}>
        <div className="min-h-screen px-6 py-10">
          <Header />
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
