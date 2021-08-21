import $ from './header.module.css';
import Link from 'next/link';
import classNames from 'classnames';
export default function Header() {
  return (
    <nav className={$.nav}>
      <div className={classNames('fblSection', 'flexBetween', 'alignItemsCenter')}>
        <Link href="/">
          <a className={$.navLogo}>The Full Body Lab</a>
        </Link>
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
      </div>
    </nav>
  );
}
