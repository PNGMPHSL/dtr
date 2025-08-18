import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { ConditionalLayout } from "@/components/layout/conditional-layout";
import { Toaster } from "@/components/ui/sonner";
import ProgressBar from "@/components/ui/progress-bar";
import { ThemeProvider } from "@/lib/contexts/theme-context";
import { OrganizationProvider } from "@/lib/contexts/organization-context";
import { ProgressBarFallback } from "@/components/ui/loading-states";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DTR System - Time Tracking Made Simple",
  description: "Modern daily time record system for organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="relative h-screen">
            <div className="absolute inset-0">
              <div className="relative h-full w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                <div></div>
              </div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
              <ThemeProvider>
                <OrganizationProvider>
                  <Suspense fallback={<ProgressBarFallback />}>
                    <ProgressBar />
                  </Suspense>
                  <ConditionalLayout>{children}</ConditionalLayout>
                  <Suspense fallback={null}>
                    <Toaster />
                  </Suspense>
                </OrganizationProvider>
              </ThemeProvider>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
