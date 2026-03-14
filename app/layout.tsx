import type { Metadata } from "next";
import { Noto_Serif_TC, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif-tc",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

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
    <html lang="zh-TW" className={`${notoSerifTC.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
