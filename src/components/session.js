import $ from './session.module.css';
import classNames from 'classnames';

export default function Session() {
  return (
    <section className="fblSection">
      <div className={classNames($.sessionCta, 'flexAround alignItemsCenter')}>
        <p className={$.packageCta}>Ready to start? Let's partner</p>
        <a href="https://calendly.com/thefullbodylab/discovery-call" className="boxButton">
          Book a session
        </a>
      </div>
    </section>
  );
}
