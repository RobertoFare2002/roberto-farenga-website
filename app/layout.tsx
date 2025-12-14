import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

const siteUrl = "http://localhost:3000"; // <-- cambia quando pubblichi (es. https://robertofarenga.com)

export const metadata = {
  title: "Roberto Farenga",
  description: "CV • Projects • Research",
  openGraph: {
    title: "Roberto Farenga — CV • Projects • Research",
    description: "Personal website with CV, selected projects and research outputs.",
    images: ["/og.jpg"],
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
