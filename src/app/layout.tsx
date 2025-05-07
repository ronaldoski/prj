import Button from "./composant/Button";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

          <div className=" flex"> 
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold">Mon Application</h1>
           
          </div>
          <div>
          </div>
          <div>
      <Link href="/Home">
        <Button label="Accueil" />
      </Link>
      <Link href="/contact">
        <Button label="Contact" className="ml-2" />
      </Link>
      <Link href="/prj">
        <Button label="Projet" className="ml-2" />
      </Link>
    </div>
      </div>
         
        {children}
      </body>
    </html>
  );
}
