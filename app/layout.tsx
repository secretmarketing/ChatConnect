import type { Metadata } from "next";
import { Pacifico } from "next/font/google"; // Removed Geist and Geist_Mono
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

// Removed Geist and Geist_Mono font definitions

export const metadata: Metadata = {
  title: "ChatConnect Pro", // Changed title to be more descriptive
  description: "AI-Powered WhatsApp Business Growth Engine", // Changed description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // Only include pacifico.variable here, or remove if not needed for global styles
        className={`${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
