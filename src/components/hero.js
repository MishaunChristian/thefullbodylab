import $ from './hero.module.css';
import classNames from 'classnames';

export default function Hero({ data, className }) {
  return (
    <section className={classNames($.hero, className)}>
      <div className="fblSection">
        <p className="fblTextSmall">{data.eyebrow}</p>
        <h1 className={$.title}>{data.header}</h1>
      </div>
    </section>
  );
}
