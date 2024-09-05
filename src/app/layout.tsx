import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MV Weather",
  description: "MV Weather is a weather app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
