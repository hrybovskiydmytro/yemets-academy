import "./globals.css";
import type { Metadata } from "next";
import AppFrame from "@/components/AppFrame";

export const metadata: Metadata = {
  title: "Yemets Academy",
  description: "Експертна діагностика серця майбутньої дитини",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-white text-slate-900 antialiased">
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}