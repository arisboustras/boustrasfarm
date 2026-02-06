import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boustrasfarm.gr"),
  title: {
    default: "Boustras Farm | Από τη φάρμα, στο πιάτο σας",
    template: "%s | Boustras Farm",
  },
  description:
    "Οικογενειακή αγροτική επιχείρηση από το 1952. 400+ στρέμματα κοντά στη Λίμνη Υλίκη. Βιώσιμη παραγωγή, ποιότητα και λογιστική.",
  keywords: ["Boustras Farm", "αγροτική παραγωγή", "Λίμνη Υλίκη", "Natura", "φρέσκα λαχανικά", "βιώσιμη γεωργία"],
  authors: [{ name: "Boustras Farm" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "Boustras Farm",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boustras Farm",
  description: "Οικογενειακή αγροτική επιχείρηση από το 1952. 400+ στρέμματα κοντά στη Λίμνη Υλίκη. Βιώσιμη παραγωγή, ποιότητα και λογιστική.",
  url: "https://boustrasfarm.gr",
  foundingDate: "1952",
  areaServed: "Greece",
  slogan: "Από τη φάρμα, στο πιάτο σας",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Λίμνη Υλίκη",
    addressRegion: "Βοιωτία",
    addressCountry: "GR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${sourceSans.variable} antialiased`}>
        <ScrollProgress />
        <Header />
        <main className="min-h-screen prose-el" lang="el">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
