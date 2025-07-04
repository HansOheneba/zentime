import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zentime",
  description: "A simple calendar app built with Next.js and TypeScript to handle bookings and appointments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: neobrutalism}}>
      <html lang="en">
        
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased animate-fade`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
