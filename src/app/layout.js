// app/layout.js
import { Lora, Open_Sans, Pacifico } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

// Font setup with next/font
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Wesley Methodist Church",
  description:
    "Welcome to Wesley Methodist Church. Led by Pastor Michael Anderson. Join us for worship, fellowship, and community service.",
};

export const viewport = {
  width: "device-width",
  initialScale: "1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-85GMZSTS1K"
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85GMZSTS1K');
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sc76n3iidj");
          `,
        }}
      />

      <body
        className={`${lora.variable} ${openSans.variable} ${pacifico.variable} min-h-screen bg-white font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
