import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: "钟宇松 | 三下乡岗位申请页",
  description:
    "面向三下乡招聘直接决策者的个人申请页，用于快速判断岗位适配度、经历证据与联系方式。",
  applicationName: "钟宇松｜三下乡申请页",
  keywords: [
    "三下乡",
    "岗位申请",
    "新宣",
    "调研",
    "材料整理",
    "组织支持",
    "钟宇松",
  ],
  authors: [{ name: "钟宇松" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "钟宇松 | 三下乡岗位申请页",
    description:
      "面向三下乡招聘直接决策者的个人申请页，用于快速判断岗位适配度、经历证据与联系方式。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "钟宇松 | 三下乡岗位申请页",
    description:
      "面向三下乡招聘直接决策者的个人申请页，用于快速判断岗位适配度、经历证据与联系方式。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
