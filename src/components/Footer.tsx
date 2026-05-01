import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebookF, color: "#1877F2" },
  { label: "Instagram", href: "#", icon: FaInstagram, color: "#E4405F" },
  { label: "Twitter", href: "#", icon: FaXTwitter, color: "#000000" },
  { label: "TikTok", href: "#", icon: FaTiktok, color: "#000000" },
];

const footerGroups = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers/find-a-job" },
  ],
  Services: [
    { label: "Solar Power Systems", href: "/services/solar" },
    { label: "Electric Mobility", href: "https://enerplazevs.com" },
    { label: "DC Living", href: "/services/dc-living" },
    { label: "ENVAC Systems", href: "/services/envac" },
    { label: "PayGo Services", href: "https://enerplazpaygo.com" },
  ],
  Opportunities: [
    { label: "Training", href: "/careers/training" },
    { label: "Industrial Training", href: "/careers/industrial-training" },
    { label: "Find a Job", href: "/careers/find-a-job" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-header">
            <Image src="/logo.png" alt="Enerplaz" className="footer__logo" width={40} height={40} />
            <span className="footer__mark">Enerplaz</span>
          </div>
          <p>
            Powering cleaner futures through refined solar delivery, smart mobility systems, and practical
            energy training.
          </p>
          <div className="footer__socials">
            {socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  style={{ "--social-color": social.color } as CSSProperties}
                  aria-label={social.label}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {Object.entries(footerGroups).map(([group, links]) => (
          <div key={group} className="footer__group">
            <h3>{group}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__newsletter">
          <h3>Stay Updated</h3>
          <p>Get the latest updates on clean energy solutions and industry insights.</p>
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__newsletter-input"
              required
            />
            <a href="/#" className="footer__newsletter-button">
              Subscribe
            </a>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>Copyright {new Date().getFullYear()} Enerplaz. All rights reserved.</p>
      </div>
    </footer>
  );
}
