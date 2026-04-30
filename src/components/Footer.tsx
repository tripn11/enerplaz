import Link from "next/link";
import { footerGroups } from "@/lib/site-data";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__mark">Enerplaz</span>
          <p>
            Powering cleaner futures through refined solar delivery, smart mobility systems, and practical
            energy training.
          </p>
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href}>
                {social.label}
              </a>
            ))}
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

        <div className="footer__contact">
          <h3>Get In Touch</h3>
          <p>Port Harcourt, Nigeria</p>
          <a href="tel:+23480036377529">+234 800 ENERPLAZ</a>
          <a href="mailto:hello@enerplaz.com">hello@enerplaz.com</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>Copyright {new Date().getFullYear()} Enerplaz. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/contact">Privacy</Link>
          <Link href="/contact">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
