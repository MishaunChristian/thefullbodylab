import $ from './header.module.css';
import Link from 'next/link';

export default function MobileNav({ toggle }) {
  return (
    <div>
      {toggle && (
        <div className={$.mobileNavContainer}>
          <ul>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about-me" onClick={() => setMenuOpen(false)}>
                About me
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
