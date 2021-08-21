import $ from './footer.module.css';
import Link from 'next/link';
import classNames from 'classnames';

export default function Footer() {
  return (
    <footer className={$.footer}>
      <div className={classNames($.footerContainer)}>
        <div className="flexBetween">
          <p className={$.footerHeader}>
            The Full Body Lab is supported experimentation coaching for your health journey by
            Mishaun Christian.
          </p>
          <ul className={$.footerNav}>
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
        <p>Copyright 2021 The Full Body Lab</p>
      </div>
    </footer>
  );
}
