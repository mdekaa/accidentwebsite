import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "./header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "GUB Election Live Updates",
  description: "Right from Polling Booths",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      

      <body className={montserrat.className}>
        <Analytics/>
        <Providers>
          <NextTopLoader />
          <Header />
          <div className="text-white bg-gradient-to-r from-cyan-900 to-blue-700">
            <div className=" container min-h-screen pt-12">{children}</div>
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
