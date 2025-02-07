import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { LoadingProvider } from "@/LoadingContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Smart Cities AI",
  description: "Redefining Smart Cities using AI",
};

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`w-full text-white antialiased ${manrope.className}`}>
        <Toaster />
        <LoadingProvider>
          <Header />
          <main className="min-w-container">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
