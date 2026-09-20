import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Priyanshu Tiwari - Engineer & Product Builder",
  description: "Priyanshu Tiwari builds AI-powered, full-stack products for real-world problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="\\ \\">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
