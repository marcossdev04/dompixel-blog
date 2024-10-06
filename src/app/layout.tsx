"use client";

import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../apiProvider/queryClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
  }),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <head>
            <ColorSchemeScript />
          </head>
          <body className="antialiased">
            <MantineProvider theme={theme}>
              {mounted ? (
                children
              ) : (
                <div className="flex h-[100vh] justify-center items-center">
                  <LoaderCircle
                    className="animate-spin"
                    fontWeight={0.75}
                    size={120}
                  />
                </div>
              )}
            </MantineProvider>
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
