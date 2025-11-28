import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Batman - The Dark Knight",
  description: "Explore the world of Batman, including movies, characters, and gadgets",
  keywords: "Batman, Bruce Wayne, Gotham City, DC Comics, Superhero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
