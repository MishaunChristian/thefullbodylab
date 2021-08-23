import $ from './testimonial.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonial({ data }) {
  return (
    <section className={classNames($.testimonial)}>
      <h2 className="fblTextSmall">What people are saying</h2>
      <figure className={classNames($.testimonialContainer, 'fblSection')}>
        <blockquote>{data.testimonialQuotation}</blockquote>
        <figcaption>{data.testimonialName}</figcaption>
      </figure>
    </section>
  );
}
