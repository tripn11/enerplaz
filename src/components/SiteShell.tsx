"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

type Theme = "light" | "dark";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "dark" || currentTheme === "light") {
      setTheme(currentTheme);
      return;
    }

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("enerplaz-theme", theme);
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-background__orb ambient-background__orb--one" />
        <div className="ambient-background__orb ambient-background__orb--two" />
      </div>
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />
      <div className="site-shell">{children}</div>
      <Footer />
    </>
  );
}
