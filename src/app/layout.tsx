import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProviderWrap from "@/components/common/ProviderWrap";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Salna Parfum - Aroma Elegant & Mewah",
  description:
    "Salna Parfum menghadirkan aroma khas perempuan yang elegan dan mewah, memberikan pengalaman menyegarkan dan meningkatkan kepercayaan diri. Temukan koleksi parfum premium kami yang terjangkau dan berkualitas tinggi.",
  keywords: [
    "parfum wanita",
    "parfum elegan",
    "parfum mewah",
    "Salna Parfum",
    "aroma khas perempuan",
    "parfum premium",
    "parfum terjangkau",
  ],
  authors: [{ name: "PT Salsabila Saputra Sinaed", url: "https://salna.com" }],
  openGraph: {
    title: "Salna Parfum - Aroma Elegant & Mewah",
    description:
      "Salna Parfum menghadirkan aroma khas perempuan yang elegan dan mewah, memberikan pengalaman menyegarkan dan meningkatkan kepercayaan diri. Temukan koleksi parfum premium kami yang terjangkau dan berkualitas tinggi.",
    type: "website",
    url: "https://salna.com",
    images: [
      {
        url: "/images/og-image.jpg", // Ganti dengan URL gambar OpenGraph Anda
        width: 1200,
        height: 630,
        alt: "Salna Parfum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salna Parfum - Aroma Elegant & Mewah",
    description:
      "Salna Parfum menghadirkan aroma khas perempuan yang elegan dan mewah, memberikan pengalaman menyegarkan dan meningkatkan kepercayaan diri. Temukan koleksi parfum premium kami yang terjangkau dan berkualitas tinggi.",
    images: ["/images/twitter-image.jpg"], // Ganti dengan URL gambar Twitter Anda
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ProviderWrap>
          <Navbar />
          {children}
          <Footer />
        </ProviderWrap>
      </body>
    </html>
  );
}