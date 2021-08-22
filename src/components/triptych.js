import $ from './triptych.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function Triptych({ data }) {
  return (
    <section className={classNames($.triptych)}>
      <div className={classNames($.triptychContainer, 'fblSection flexBetween')}>
        {data.map(teaser => (
          <div key={teaser._key} className={$.tile}>
            <Link href={teaser.link}>
              <a className={$.teaserLink}>
                <Image
                  src={teaser.image?.asset?.url}
                  layout="responsive"
                  width="400"
                  height="400"
                />
              </a>
            </Link>
            <h2 className={$.teaserHeading}>{teaser.heading}</h2>
            <p>{teaser.copy}</p>
            <Link href={teaser.link}>
              <a className={$.teaserLink}>{teaser.linkCopy}</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
