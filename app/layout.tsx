import type { Metadata } from "next";
import "./globals.css";
import "./extra.css";
import "./extra2.css";
import "./extra3.css";
import "./extra4.css";
import "./extra5.css";
import "./extra6.css";

export const metadata: Metadata = {
  title: "MyRecipe 食光小屋 — 互動式手機原型",
  description: "社交探索與 AI 遊戲化，兩種 MyRecipe 手機體驗。",
  openGraph: {
    title: "MyRecipe 食光小屋",
    description: "把冰箱食材，變成每一天的料理靈感",
    images: [{ url: "/og.png", width: 1674, height: 941 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyRecipe 食光小屋",
    description: "把冰箱食材，變成每一天的料理靈感",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
