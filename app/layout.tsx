import type { Metadata } from "next";
import "./globals.css";
import NotebookContainer from "@/components/NotebookContainer";

export const metadata: Metadata = {
  title: "My Notebook Blog",
  description: "A personal blog styled like a composition notebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NotebookContainer>
          {children}
        </NotebookContainer>
      </body>
    </html>
  );
}
