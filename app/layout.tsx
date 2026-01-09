import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QofenoLabs - High-Converting SaaS Landing Pages",
  description: "QofenoLabs helps SaaS founders launch fast, modern, and conversion-focused landing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
