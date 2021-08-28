import $ from './header.module.css';
import Link from 'next/link';

export default function DesktopNav() {
  return (
    <div className={$.desktopNavContainer}>
      <div className="flexBetween alignItemsCenter">
        <ul className={$.navLinks}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about-me">About me</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="https://calendly.com/thefullbodylab/discovery-call">
          <a className={$.navButton}>Schedule a call</a>
        </Link>
      </div>
    </div>
  );
}
