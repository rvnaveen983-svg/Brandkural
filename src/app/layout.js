import Navbar from "@/components/navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head> 
    <meta name="google-site-verification" content="r7w815NNUXQYigtr4XQrHKYgwNDdAAErI2sfmsnfJfA" />
    </head>
      <body>
        <Navbar />        {/* ✅ Shows on every page */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
