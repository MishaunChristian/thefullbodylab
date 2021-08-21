import $ from './footer.module.css';

export default function Footer() {
  return (
    <footer className={$.footer}>
      <div>
        <div className={$.footerContainer}>
          <p className={$.footerHeader}>
            The Full Body Lab is supported experimentation coaching for your health journey by
            Mishaun Christian.
          </p>
          <ul className={$.footerNav}>
            <li>Services</li>
            <li>About Me</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>Copyright 2021 The Full Body Lab</p>
      </div>
    </footer>
  );
}
