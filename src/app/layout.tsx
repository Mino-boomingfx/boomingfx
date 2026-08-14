import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "@/context/ContentContext";
import ClientLayout from "@/components/ClientLayout";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Boomingfx - Market Trading Analytics",
  description: "BoomingFx brings 7+ years of trading industry expertise to the table, providing you with proven strategies and insights to accelerate your success and minimize losses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.className} bg-gray-50 text-black antialiased`}>
        <ContentProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ContentProvider>
      </body>
    </html>
  );
}
