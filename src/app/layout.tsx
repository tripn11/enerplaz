import type { Metadata } from "next";
import Script from "next/script";
import SiteShell from "@/components/SiteShell";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Enerplaz | Renewable Energy Pioneers",
  description:
    "Enerplaz delivers refined solar power systems, electric mobility infrastructure, training, and smart energy solutions across Nigeria.",
};

const themeScript = `
  try {
    const saved = localStorage.getItem('enerplaz-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (systemDark ? 'dark' : 'light');
  } catch (error) {
    document.documentElement.dataset.theme = 'light';
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body suppressHydrationWarning>
        <Script id="enerplaz-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
