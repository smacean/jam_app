// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/layouts/header/header";

export const metadata = {
  title: "My Website",
  description: "Demo site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main className="mx-auto max-w-[960px] p-6 space-y-24">{children}</main>
      </body>
    </html>
  );
}
