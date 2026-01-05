import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web BDS Map",
  description: "Authentication flow with Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
