import {Inter} from "next/font/google"
import Header from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]})
export const metadata = {
  title: "FinAura",
  description: "The OneStop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
 <Header />

        <main className="min-h-screen">{children}</main>
       <Toaster richColors/>
        <footer className="bg-blue-50">
          <div className="container mx-auto px-4 text-center text-gray-600">
           <p>Made with ❤️ by Vyshnavi</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
