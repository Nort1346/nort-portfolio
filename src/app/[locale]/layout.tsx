import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locales } from "@/types/Locales";
import "@/style/globals.css";
import { Metadata } from "next";
import { geistSans, jura, lexendDeca } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Nort - Developer",
  description: "The perfect place to explore my work and get in touch",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html className="scroll-smooth scrollbar" lang={locale}>
      <body
        className={`${geistSans.variable} ${jura.variable} ${lexendDeca.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
