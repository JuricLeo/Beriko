import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/main-layout/footer";
import Navbar from "@/components/layout/main-layout/navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/layout/main-layout/cookie-consent";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Beriko - Montažni Objekti, hale, bungalovi, skladišta. radionice i garaže",
  description:
    "Beriko - Stručnjaci za izradu montažnih objekata. Nudimo visokokvalitetna, prilagodljiva i izdržljiva rješenja za montažne objekte i garažna vrata, uz izvrsnu uslugu i zadovoljstvo klijenata. Otkrijte inovativne i dugotrajne proizvode koji ispunjavaju vaše potrebe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mt-[92px]">{children}</main>
          <Footer />
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
