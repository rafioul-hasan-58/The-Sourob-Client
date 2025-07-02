import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import "./globals.css";

export const metadata: Metadata = {
  title: "Rafioul Hasan Sourob | Full-Stack Web Developer",
  description: "Welcome to the personal portfolio of Rafioul Hasan Sourob – a passionate full-stack developer specializing in React, Next.js, MongoDB, and modern web technologies. Explore my projects, blogs, and resume.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  bg-cover bg-no-repeat bg-center min-h-screen bg-black`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
