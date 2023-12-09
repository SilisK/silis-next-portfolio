import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Silis Kleemoff | Software Engineer",
    template: "%s",
  },
  description:
    "I'm a software engineer from the New York Metropolitan area. I have a passion for gaming so I studided to gain the skills to create games & software.",
  openGraph: {
    title: "Silis Kleemoff — Software Engineering Portfolio",
    description: "Video games, web apps, documentation, and more...",
    url: "https://siliskleemoff.com",
    siteName: "Silis Kleemoff",
    images: [
      {
        url: "https://github.com/SilisK/silisk.github.io/blob/main/src/assets/silis-portrait.jpg?raw=true",
        width: 512,
        height: 512,
      },
    ],
  },
  icons: {
    icon: "/silis-kleemoff-web-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
