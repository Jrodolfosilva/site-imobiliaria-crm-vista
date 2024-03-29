import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import ContainerHeader from "./components-layout/header/header";
import ReactQueryClientProvider from "./react-query/reactQueryProvider";
import "./global.css"
import Footer from "./components-layout/footer/footer";


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
    <ReactQueryClientProvider>
       <html lang="pt-BR">
      <body className={poppins.className}>
        <ContainerHeader/>
        <main>
          {children}
        </main>
      <Footer/>
      </body>
     </html>
    </ReactQueryClientProvider>
     
  )
    
}
