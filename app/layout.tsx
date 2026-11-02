import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import StoreProvider from "./StoreProvider";
import Themeprovider from "./ThemeProvider";
import QueryProvider from "./QueryProvider";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" className={cn("font-sans", inter.variable)}>
      <body>
        <QueryProvider>
          <StoreProvider>
            <Themeprovider>{children}</Themeprovider>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
