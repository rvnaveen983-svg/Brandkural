import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="r7w815NNUXQYigtr4XQrHKYgwNDdAAErI2sfmsnfJfA"
        />

        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PDT2XJFL"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body>
        <Navbar /> {/* ✅ Shows on every page */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
