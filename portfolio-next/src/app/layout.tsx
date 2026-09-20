import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu Tiwari — Engineer & Product Builder",
  description: "Priyanshu Tiwari builds AI-powered, full-stack products for real-world problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
