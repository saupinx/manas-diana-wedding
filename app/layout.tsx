import type { Metadata } from "next";
import { Cormorant_Garamond, Marck_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-invite-serif",
  display: "swap",
});

const scriptFallback = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-invite-script",
  display: "swap",
});

const sloopScript = localFont({
  src: "./fonts/sloop-scriptthree.ttf",
  variable: "--font-sloop-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Манас & Диана | Үйлену тойы",
  description: "Свадебное приглашение Манаса и Дианы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${serif.variable} ${scriptFallback.variable} ${sloopScript.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">{children}</body>
    </html>
  );
}
