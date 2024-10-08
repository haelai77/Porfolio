import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "next-themes";
import Popup from "@/components/popup/popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leo's portfolio website",
  description: "Come here to learn absolutely nothing and do absolutely nothing.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ThemeProvider>
            {/* <Popup/> */}
            <div className="container">
              
              <Navbar/>

              <div className="page">
                {children}
              </div>

              <Footer/>

            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
