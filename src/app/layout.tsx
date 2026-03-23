import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'Webbing Studios | Visually Striking, High-Converting Websites',
  description: 'Webbing Studios crafts powerful, professional websites for small businesses, helping them stand out, attract more clients, and grow online. Get a website that converts.',
  openGraph: {
    "title": "Webbing Studios | Visually Striking, High-Converting Websites",
    "description": "Webbing Studios crafts powerful, professional websites for small businesses, helping them stand out, attract more clients, and grow online. Get a website that converts.",
    "url": "https://webbingstudios.com",
    "siteName": "Webbing Studios",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/modern-dark-themed-web-design-interface--1774244059970-99519def.png",
        "alt": "Modern web design dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Webbing Studios | Visually Striking, High-Converting Websites",
    "description": "Webbing Studios crafts powerful, professional websites for small businesses, helping them stand out, attract more clients, and grow online. Get a website that converts.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BKhvXc6vyOhIEOZ1s3eUX0Jrjd/modern-dark-themed-web-design-interface--1774244059970-99519def.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
