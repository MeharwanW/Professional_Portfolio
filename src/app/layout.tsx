
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] , weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800"] ,
  variable: "--font-jetbrainsMono"
});
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
      <Header />
      <StairTransition/>
      <PageTransition>

        {children}
      </PageTransition>
        </body>
     
    </html>
  );
}
