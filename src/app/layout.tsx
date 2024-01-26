import type { Metadata } from "next";
import "./global.css"
import ContainerHeader from "./components-layout/header/header";
import {Poppins} from 'next/font/google'
export const metadata: Metadata = {
  title: "Imobiliária",
  description: "Imóveis de Alto Padão",

};
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400','500','600','700'],
   style: ['normal', 'italic'],
   display: 'swap'
   })

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <ContainerHeader/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
