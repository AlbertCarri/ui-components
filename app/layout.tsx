import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI components",
  description: "Componentes de React siguiendo buenas prácticas",
  openGraph: {
    title: "UI components",
    description: "Componentes UI reutilizables",
    images: ["https://www.uicomponents.edelbyte.com.ar/uicomponents.webp"],
    type: "website",
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased prose-invert`}
      >
        <div className="flex flex-col w-full">
          <header className="flex h-12">
            <Navbar />
          </header>
          <div className="flex flex-row">
            <aside>
              <SideBar/>
            </aside>
            <main className="p-4">{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
