import $ from './header.module.css';
import Link from 'next/link';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import classNames from 'classnames';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={$.nav}>
      <div className={classNames($.navContainer, 'fblSection')}>
        <Link href="/">
          <a className={$.navLogo}>The Full Body Lab</a>
        </Link>
        <button
          className={$.menuToggle}
          onClick={() => setToggle(!toggle)}
          toggle={toggle}
          aria-label="Navigation menu"
          aria-expanded="true"
        >
          <div className={$.menuLine} />
          <div className={$.menuLine} />
          <div className={$.menuLine} />
        </button>
        <DesktopNav />
      </div>
      <MobileNav toggle={toggle} />
    </nav>
  );
}
