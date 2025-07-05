import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/CookieConsent";
import FloatingButtons from "../components/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NemiZen Technology - Tech with Purpose, Peace, and Power",
  description: "NemiZen Technology offers website & app development, digital marketing, social media, accounting services, branding & design, and AI/ML integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-inter`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
          <FloatingButtons />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
