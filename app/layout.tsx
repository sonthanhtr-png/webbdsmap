import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web BĐS Map",
  description: "Landing page và flow đăng nhập cho Web BĐS Map",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
