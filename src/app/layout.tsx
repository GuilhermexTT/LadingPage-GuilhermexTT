import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Guilherme Carvalho | Dev & Automation",
  description: "Portfólio de Guilherme Carvalho, desenvolvedor especializado em automação, IA e desenvolvimento web premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} dark`}>
      <body className="antialiased bg-background text-foreground selection:bg-cyan/30 selection:text-cyan-100">
        {children}
      </body>
    </html>
  );
}
