"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiMoon, FiSun, FiArrowDown } from "react-icons/fi";
import Image from "next/image";

type Theme = "light" | "dark";

type NavChild = {
  label: string;
  href: string;
  badge?: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Solar Power Systems", href: "/services/solar" },
      { label: "Electric Mobility", href: "/services/mobility" },
      { label: "DC Living", href: "/services/dc-living" },
      { label: "ENVAC Systems", href: "/services/envac" },
      { label: "PayGo Services", href: "/services/paygo" },
      { label: "Training", href: "/services/training" },
      { label: "Street Lights", href: "/services/streetlights" },
      { label: "Solar Water Pumps", href: "/services/solar-water-pumps" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  {
    label: "Careers",
    href: "#",
    children: [
      { label: "Training", href: "/careers/training" },
      { label: "Industrial Training", href: "/careers/industrial-training" },
      { label: "Find a Job", href: "/careers/find-a-job" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const pathname = usePathname();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [desktopGroup, setDesktopGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileGroup(null);
    setDesktopGroup(null);
  }, [pathname]);

  const activeRoot = useMemo(() => {
    if (!pathname) {
      return "/";
    }

    if (pathname === "/") {
      return "/";
    }

    const parts = pathname.split("/").filter(Boolean);
    return parts.length > 0 ? `/${parts[0]}` : "/";
  }, [pathname]);

  const openDesktopGroup = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setDesktopGroup(label);
  };

  const closeDesktopGroup = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setDesktopGroup(null);
    }, 180);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link href="/" className="nav__brand" aria-label="Enerplaz home">
            <span className="nav__brand-mark" aria-hidden="true">
              <Image src="/logo.png" alt="" width={100} height={100} />
            </span>
            <span className="nav__brand-copy">
              <span className="nav__brand-name">Enerplaz</span>
            </span>
          </Link>

          <div className="nav__desktop">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : activeRoot === item.href;
              const isOpen = desktopGroup === item.label;

              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nav__link ${isActive ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className={`nav__dropdown ${isOpen ? "is-open" : ""}`}
                  onMouseEnter={() => openDesktopGroup(item.label)}
                  onMouseLeave={closeDesktopGroup}
                >
                  <Link
                    href={item.href}
                    className={`nav__link nav__link--dropdown ${isActive ? "is-active" : ""}`}
                    onFocus={() => openDesktopGroup(item.label)}
                    onBlur={(event) => {
                      if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) {
                        closeDesktopGroup();
                      }
                    }}
                  >
                    {item.label}
                    <span className="nav__chevron" aria-hidden="true">
                      <svg viewBox="0 0 12 12" focusable="false">
                        <path d="M2 4.25L6 8.25L10 4.25" />
                      </svg>
                    </span>
                  </Link>

                  <div
                    className="nav__panel"
                    onMouseEnter={() => openDesktopGroup(item.label)}
                    onMouseLeave={closeDesktopGroup}
                  >
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="nav__panel-link">
                        <span className="nav__panel-copy">
                          <strong>{child.label}</strong>
                        </span>
                        {child.badge ? <span className="nav__badge">{child.badge}</span> : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="nav__actions">
            <button
              type="button"
              className={`nav__theme ${theme === "dark" ? "is-dark" : ""}`}
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              data-cursor="hover"
            >
              <span className="nav__theme-icon nav__theme-icon--sun" aria-hidden="true">
                <FiSun />
              </span>
              <span className="nav__theme-icon nav__theme-icon--moon" aria-hidden="true">
                <FiMoon />
              </span>
            </button>

            <Link
              href="/contact"
              className={`button nav__cta ${theme === "dark" ? "nav__cta--dark" : "nav__cta--light"}`}
            >
              Get a Quote
            </Link>

            <button
              type="button"
              className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__inner">
          {navItems.map((item) => {
            const expanded = mobileGroup === item.label;
            const isActive = item.href === "/" ? pathname === "/" : activeRoot === item.href;

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-menu__link ${isActive ? "is-active" : ""}`}
                >
                  <span>{item.label}</span>
                  <span className="mobile-menu__arrow"></span>
                </Link>
              );
            }

            return (
              <div key={item.label} className="mobile-menu__group">
                <button
                  type="button"
                  className={`mobile-menu__link mobile-menu__link--button ${expanded ? "is-open" : ""} ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setMobileGroup((value) => (value === item.label ? null : item.label))}
                  aria-expanded={expanded}
                >
                  <span>{item.label}</span>
                  <span className="mobile-menu__arrow"><FiArrowDown /></span>
                </button>

                <div className={`mobile-menu__submenu ${expanded ? "is-open" : ""}`}>
                  <div className="mobile-menu__submenu-inner">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`mobile-menu__subitem ${pathname === child.href ? "is-active" : ""}`}
                      >
                        <strong>{child.label}</strong>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mobile-menu__footer">
            <button
              type="button"
              className={`nav__theme mobile-menu__theme ${theme === "dark" ? "is-dark" : ""}`}
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              data-cursor="hover"
            >
              <span className="nav__theme-icon nav__theme-icon--sun" aria-hidden="true">
                <FiSun />
              </span>
              <span className="nav__theme-copy">{theme === "dark" ? "Dark mode" : "Light mode"}</span>
              <span className="nav__theme-icon nav__theme-icon--moon" aria-hidden="true">
                <FiMoon />
              </span>
            </button>

            <Link
              href="/contact"
              className={`button button--full mobile-menu__cta ${
                theme === "dark" ? "nav__cta--dark" : "nav__cta--light"
              }`}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
