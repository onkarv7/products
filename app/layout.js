import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { logo } from "./assets";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Appscrip",
  description:
    "Explore and discover amazing products on Appscrip. High-quality items with seamless shopping experience.",
  keywords:
    "Appscrip, e-commerce, shopping, high-quality products, discover items",
  author: "Appscrip Team",
  viewport: "width=device-width, initial-scale=1",
  ogTitle: "Appscrip - Discover Amazing Products",
  ogDescription:
    "Explore and discover amazing products on Appscrip. High-quality items with seamless shopping experience.",
  ogImage: { logo },
  ogUrl: "https://appscrip.com",
};

// export const metadata = {
//   title: "Appscrip",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>{" "}
        <meta name="description" content={metadata.description} />{" "}
        <meta name="keywords" content={metadata.keywords} />{" "}
        <meta name="author" content={metadata.author} />{" "}
        <meta name="viewport" content={metadata.viewport} />{" "}
        <meta property="og:title" content={metadata.ogTitle} />{" "}
        <meta property="og:description" content={metadata.ogDescription} />{" "}
        <meta property="og:image" content={metadata.ogImage} />{" "}
        <meta property="og:url" content={metadata.ogUrl} />{" "}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
