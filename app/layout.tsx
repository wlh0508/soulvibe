import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "樺芯苑｜都會高壓族的大腦離線空間・頌缽頻率療癒",
  description: "給關不掉大腦的你，一場60分鐘的深層靜音。不需練習冥想，只需躺下感受。台北・嘉義・高雄頌缽頻率療癒空間。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
      </body>
    </html>
  );
}
