import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import { ThemeProvider } from "../components/ThemeProvider";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Umem's Side | Software Engineer & AI",
  description: "Portofolio profesional dari Hisyam Khaeru Umam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      {/* Tambahkan warna background dan text default untuk mode terang & gelap di body */}
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-500`}>
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}