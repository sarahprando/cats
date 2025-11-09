import { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";

export const metadata: Metadata = {
  title: "Cats Next",
  description: "A social network made for cats to share their best moments."  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        {children}
      </body>
    </html>
  );
}
