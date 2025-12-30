import type { Metadata } from "next";
import "./globals.css";
import HyperCardStack from "@/components/HyperCardStack";

export const metadata: Metadata = {
  title: "Andrew Udell",
  description: "Thoughts, ideas, and things I'm learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HyperCardStack>
          {children}
        </HyperCardStack>
      </body>
    </html>
  );
}
