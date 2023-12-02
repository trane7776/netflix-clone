import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body>{children}</body>
      </AuthContext>
    </html>
  );
}
