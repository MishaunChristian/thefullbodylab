import $ from './intro.module.css';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
export default function Intro({ data }) {
  return (
    <section className={classNames($.intro, 'fblSection flexAround')}>
      <p className={$.introTitle}>{data.introHeader}</p>
      <div className={$.introCopy}>
        <ReactMarkdown>{data.introCopy}</ReactMarkdown>
        <Link href="/">
          <a className="textLink">Learn more about functional coaching</a>
        </Link>
      </div>
    </section>
  );
}
