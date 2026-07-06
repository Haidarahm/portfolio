import "../styles/global.scss";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import SmoothScroll from "../components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://en.haidar.tikit.ae"),
  title: "Haidar Ahmad",
  description:
    "Haidar's blog and portfolio, following his journeys as a software developer in Pittsburgh, PA",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      <Analytics />
    </html>
  );
}
